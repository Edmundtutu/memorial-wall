export interface Memory {
  id: string;
  type: "text" | "image" | "video" | "quote";
  content: string;
  mediaUrl?: string;
  authorName?: string;
  createdAt: Date;
}

export interface Reflection {
  id: string;
  memoryId: string;
  content: string;
  authorName?: string;
  createdAt: Date;
}
