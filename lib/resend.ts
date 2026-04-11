import { Resend } from 'resend';

// For build time, use a placeholder if the API key is not set
// The actual API key will be required at runtime
const apiKey = process.env.RESEND_API_KEY || 'placeholder_for_build';

export const resend = new Resend(apiKey);
