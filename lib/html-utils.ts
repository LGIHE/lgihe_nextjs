/**
 * HTML Utilities
 * 
 * Helper functions for safely rendering HTML content from backend
 */

/**
 * Sanitize HTML content for safe rendering
 * This is a basic sanitization - for production, consider using a library like DOMPurify
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Remove potentially dangerous tags and attributes
  let sanitized = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove inline event handlers
    .replace(/on\w+\s*=\s*[^\s>]*/gi, '');
  
  return sanitized;
}

/**
 * Check if content contains HTML tags
 */
export function isHtmlContent(content: string): boolean {
  if (!content) return false;
  return /<[a-z][\s\S]*>/i.test(content);
}

/**
 * Create safe HTML props for dangerouslySetInnerHTML
 */
export function createMarkup(html: string) {
  return { __html: sanitizeHtml(html) };
}

/**
 * Format plain text with line breaks preserved
 */
export function formatPlainText(text: string): string {
  if (!text) return '';
  return text.replace(/\n/g, '<br />');
}

/**
 * Render content - either as HTML or plain text with preserved formatting
 */
export function renderContent(content: string) {
  if (!content) return { __html: '' };
  
  if (isHtmlContent(content)) {
    return createMarkup(content);
  } else {
    return { __html: formatPlainText(content) };
  }
}
