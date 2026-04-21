/**
 * API Client for Laravel Backend
 * 
 * This module provides functions to communicate with the Laravel backend API.
 * All public content (news, jobs, events) is fetched from the Laravel server.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface FetchOptions extends RequestInit {
  token?: string;
}

/**
 * Generic API request function
 */
async function apiRequest<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
    // Enable caching for GET requests
    next: fetchOptions.method === 'GET' || !fetchOptions.method 
      ? { revalidate: 60 } // Revalidate every 60 seconds
      : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || `API Error: ${response.statusText}`);
  }

  return response.json();
}

// ============================================================================
// NEWS API
// ============================================================================

export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  category?: string;
  status: 'draft' | 'published' | 'archived';
  published_at: string;
  created_at: string;
  updated_at: string;
  creator?: {
    id: number;
    name: string;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export const newsApi = {
  /**
   * Get all published news with pagination
   */
  getAll: (page = 1, perPage = 12) =>
    apiRequest<PaginatedResponse<NewsItem>>(`/news?page=${page}&per_page=${perPage}`),
  
  /**
   * Get a single news item by slug
   */
  getBySlug: (slug: string) =>
    apiRequest<NewsItem>(`/news/${slug}`),
  
  /**
   * Get latest news (for homepage)
   */
  getLatest: (limit = 6) =>
    apiRequest<PaginatedResponse<NewsItem>>(`/news?per_page=${limit}`),
};

// ============================================================================
// JOBS API
// ============================================================================

export interface Job {
  id: number;
  title: string;
  department?: string;
  location?: string;
  type?: string; // full-time, part-time, contract
  description: string;
  requirements?: string;
  responsibilities?: string;
  salary_range?: string;
  deadline?: string;
  status: 'active' | 'closed' | 'draft';
  created_at: string;
  updated_at: string;
}

export const jobsApi = {
  /**
   * Get all active jobs with pagination
   */
  getAll: (page = 1, perPage = 12) =>
    apiRequest<PaginatedResponse<Job>>(`/jobs?page=${page}&per_page=${perPage}`),
  
  /**
   * Get a single job by ID
   */
  getById: (id: string | number) =>
    apiRequest<Job>(`/jobs/${id}`),
  
  /**
   * Get latest jobs (for homepage)
   */
  getLatest: (limit = 6) =>
    apiRequest<PaginatedResponse<Job>>(`/jobs?per_page=${limit}`),
};

// ============================================================================
// EVENTS API
// ============================================================================

export interface Event {
  id: number;
  title: string;
  description: string;
  location?: string;
  start_date: string;
  end_date?: string;
  featured_image?: string;
  category?: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export const eventsApi = {
  /**
   * Get all upcoming events with pagination
   */
  getAll: (page = 1, perPage = 12) =>
    apiRequest<PaginatedResponse<Event>>(`/events?page=${page}&per_page=${perPage}`),
  
  /**
   * Get a single event by ID
   */
  getById: (id: string | number) =>
    apiRequest<Event>(`/events/${id}`),
  
  /**
   * Get upcoming events (for homepage)
   */
  getUpcoming: (limit = 6) =>
    apiRequest<PaginatedResponse<Event>>(`/events?per_page=${limit}`),
};

// ============================================================================
// TENDERS API
// ============================================================================

export interface Tender {
  id: number;
  title: string;
  reference_number?: string;
  description: string;
  requirements?: string;
  deadline: string;
  status: 'open' | 'closed' | 'awarded';
  document_url?: string;
  created_at: string;
  updated_at: string;
}

export const tendersApi = {
  /**
   * Get all open tenders with pagination
   */
  getAll: (page = 1, perPage = 12) =>
    apiRequest<PaginatedResponse<Tender>>(`/tenders?page=${page}&per_page=${perPage}`),
  
  /**
   * Get a single tender by ID
   */
  getById: (id: string | number) =>
    apiRequest<Tender>(`/tenders/${id}`),
};

// ============================================================================
// RESEARCH API
// ============================================================================

export interface Research {
  id: number;
  title: string;
  authors?: string;
  abstract?: string;
  content: string;
  category?: string;
  published_date?: string;
  document_url?: string;
  status: 'published' | 'draft';
  created_at: string;
  updated_at: string;
}

export const researchApi = {
  /**
   * Get all published research with pagination
   */
  getAll: (page = 1, perPage = 12) =>
    apiRequest<PaginatedResponse<Research>>(`/research?page=${page}&per_page=${perPage}`),
  
  /**
   * Get a single research item by ID
   */
  getById: (id: string | number) =>
    apiRequest<Research>(`/research/${id}`),
};

// ============================================================================
// MEDIA API
// ============================================================================

export interface Media {
  id: number;
  filename: string;
  original_name: string;
  mime_type: string;
  size: number;
  url: string;
  thumbnail_url?: string;
  created_at: string;
}

export const mediaApi = {
  /**
   * Get all media files with pagination
   */
  getAll: (page = 1, perPage = 20) =>
    apiRequest<PaginatedResponse<Media>>(`/media?page=${page}&per_page=${perPage}`),
  
  /**
   * Get media by type (image, document, video)
   */
  getByType: (type: string, page = 1, perPage = 20) =>
    apiRequest<PaginatedResponse<Media>>(`/media?type=${type}&page=${page}&per_page=${perPage}`),
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get full URL for media files
 */
export function getMediaUrl(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '') || 'http://localhost:8000';
  return `${baseUrl}/storage/${path}`;
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
