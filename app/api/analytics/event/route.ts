import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'logs');
const EVENT_LOG_FILE = path.join(LOG_DIR, 'events.json');

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: string;
}

async function ensureLogDirectory() {
  if (!existsSync(LOG_DIR)) {
    await mkdir(LOG_DIR, { recursive: true });
  }
}

async function readEventLogs(): Promise<AnalyticsEvent[]> {
  try {
    if (!existsSync(EVENT_LOG_FILE)) {
      return [];
    }
    const data = await readFile(EVENT_LOG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeEventLogs(logs: AnalyticsEvent[]) {
  await ensureLogDirectory();
  await writeFile(EVENT_LOG_FILE, JSON.stringify(logs, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const event: AnalyticsEvent = await request.json();
    
    // Read existing logs
    const logs = await readEventLogs();
    
    // Add new event
    logs.push(event);
    
    // Keep only last 5000 events
    if (logs.length > 5000) {
      logs.splice(0, logs.length - 5000);
    }
    
    // Write back to file
    await writeEventLogs(logs);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to log event:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to log event' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const logs = await readEventLogs();
    return NextResponse.json({ events: logs });
  } catch (error) {
    console.error('Failed to read event logs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to read logs' },
      { status: 500 }
    );
  }
}
