const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export interface Memorial {
  id: number;
  name: string;
  slug: string;
  dateOfBirth?: string;
  dateOfPassing?: string;
  dedication?: string;
  coverImage?: string;
  avatar?: string;
  createdAt: string;
}

export interface Memory {
  id: number;
  type: 'text' | 'image' | 'video' | 'quote';
  content: string;
  mediaUrl?: string;
  authorName?: string;
  createdAt: string;
  reflectionsCount?: number;
}

export interface Reflection {
  id: number;
  memoryId: number;
  content: string;
  authorName?: string;
  createdAt: string;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async getMemorial(slug: string): Promise<Memorial> {
    const response = await fetch(`${this.baseUrl}/memorials/${slug}`);
    if (!response.ok) {
      throw new Error('Memorial not found');
    }
    return response.json();
  }

  async getMemories(slug: string): Promise<Memory[]> {
    const response = await fetch(`${this.baseUrl}/memorials/${slug}/memories`);
    if (!response.ok) {
      throw new Error('Failed to fetch memories');
    }
    const data = await response.json();
    return data.data;
  }

  async createMemory(slug: string, data: {
    type: string;
    content: string;
    authorName?: string;
    media?: File;
  }): Promise<Memory> {
    const formData = new FormData();
    formData.append('type', data.type);
    formData.append('content', data.content);
    if (data.authorName) {
      formData.append('author_name', data.authorName);
    }
    if (data.media) {
      formData.append('media', data.media);
    }

    const response = await fetch(`${this.baseUrl}/memorials/${slug}/memories`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create memory');
    }

    return response.json();
  }

  async getReflections(memoryId: number): Promise<Reflection[]> {
    const response = await fetch(`${this.baseUrl}/memories/${memoryId}/reflections`);
    if (!response.ok) {
      throw new Error('Failed to fetch reflections');
    }
    const data = await response.json();
    return data.data;
  }

  async createReflection(memoryId: number, data: {
    content: string;
    authorName?: string;
  }): Promise<Reflection> {
    const response = await fetch(`${this.baseUrl}/memories/${memoryId}/reflections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: data.content,
        author_name: data.authorName,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create reflection');
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();
