import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'logs');
const ERROR_LOG_FILE = path.join(LOG_DIR, 'errors.json');

interface ErrorLog {
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

async function ensureLogDirectory() {
  if (!existsSync(LOG_DIR)) {
    await mkdir(LOG_DIR, { recursive: true });
  }
}

async function readErrorLogs(): Promise<ErrorLog[]> {
  try {
    if (!existsSync(ERROR_LOG_FILE)) {
      return [];
    }
    const data = await readFile(ERROR_LOG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeErrorLogs(logs: ErrorLog[]) {
  await ensureLogDirectory();
  await writeFile(ERROR_LOG_FILE, JSON.stringify(logs, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const errorLog: ErrorLog = await request.json();
    
    // Read existing logs
    const logs = await readErrorLogs();
    
    // Add new log
    logs.push(errorLog);
    
    // Keep only last 1000 errors
    if (logs.length > 1000) {
      logs.splice(0, logs.length - 1000);
    }
    
    // Write back to file
    await writeErrorLogs(logs);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to log error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to log error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const logs = await readErrorLogs();
    return NextResponse.json({ errors: logs });
  } catch (error) {
    console.error('Failed to read error logs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to read logs' },
      { status: 500 }
    );
  }
}
