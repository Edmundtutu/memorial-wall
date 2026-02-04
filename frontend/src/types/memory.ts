export interface Memory {
  id: number;
  type: "text" | "image" | "video" | "quote";
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
