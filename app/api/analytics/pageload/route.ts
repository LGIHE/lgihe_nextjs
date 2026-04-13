import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'logs');
const PAGELOAD_LOG_FILE = path.join(LOG_DIR, 'pageloads.json');

interface PageLoadMetrics {
  url: string;
  loadTime: number;
  timestamp: string;
  userAgent?: string;
  sessionId?: string;
}

async function ensureLogDirectory() {
  if (!existsSync(LOG_DIR)) {
    await mkdir(LOG_DIR, { recursive: true });
  }
}

async function readPageLoadLogs(): Promise<PageLoadMetrics[]> {
  try {
    if (!existsSync(PAGELOAD_LOG_FILE)) {
      return [];
    }
    const data = await readFile(PAGELOAD_LOG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writePageLoadLogs(logs: PageLoadMetrics[]) {
  await ensureLogDirectory();
  await writeFile(PAGELOAD_LOG_FILE, JSON.stringify(logs, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const metrics: PageLoadMetrics = await request.json();
    
    // Read existing logs
    const logs = await readPageLoadLogs();
    
    // Add new metrics
    logs.push(metrics);
    
    // Keep only last 10000 entries
    if (logs.length > 10000) {
      logs.splice(0, logs.length - 10000);
    }
    
    // Write back to file
    await writePageLoadLogs(logs);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to log page load:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to log page load' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const logs = await readPageLoadLogs();
    return NextResponse.json({ pageloads: logs });
  } catch (error) {
    console.error('Failed to read page load logs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to read logs' },
      { status: 500 }
    );
  }
}
