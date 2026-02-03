import { Memory, Reflection } from "@/types/memory";

// Sample memories for demonstration - chronological order (oldest first)
export const sampleMemories: Memory[] = [
  {
    id: "1",
    type: "text",
    content: "I remember the way she would always have tea ready when I visited. Not just any tea—her special blend with cardamom and a hint of orange peel. She said the secret was patience. Let it steep slowly. There's no rushing the good things.",
    authorName: "Margaret",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    type: "quote",
    content: "The best time to plant a tree was twenty years ago. The second best time is now.",
    authorName: "Her favorite saying",
    createdAt: new Date("2024-02-03"),
  },
  {
    id: "3",
    type: "text",
    content: "She taught me how to read when I was four. Every afternoon, we'd sit in the garden with a picture book. She never rushed, never corrected harshly. Just gentle repetition and endless patience. I became a librarian because of those afternoons.",
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "4",
    type: "image",
    content: "The garden in spring, 1987. She spent thirty years cultivating those roses. Said each one had a name, though she never told me what they were.",
    mediaUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop&q=80",
    authorName: "Thomas",
    createdAt: new Date("2024-03-10"),
  },
  {
    id: "5",
    type: "text",
    content: "When my father passed, she didn't offer words. She just came over every evening for three months and sat with me. Sometimes we talked. Mostly we didn't. That silence taught me more about love than any conversation could.",
    authorName: "David",
    createdAt: new Date("2024-03-28"),
  },
];

export const sampleReflections: Reflection[] = [
  {
    id: "r1",
    memoryId: "1",
    content: "I can still smell that tea. She made it for me once, years ago. Thank you for bringing this back.",
    authorName: "Sarah",
    createdAt: new Date("2024-01-17"),
  },
  {
    id: "r2",
    memoryId: "1",
    content: "She gave me the recipe before she passed. I'll share it with the family if anyone would like it.",
    authorName: "Margaret",
    createdAt: new Date("2024-01-18"),
  },
  {
    id: "r3",
    memoryId: "5",
    content: "She did the same for my mother. Just presence. That was her gift.",
    createdAt: new Date("2024-03-30"),
  },
];

// Helper to get reflections for a specific memory
export function getReflectionsForMemory(memoryId: string): Reflection[] {
  return sampleReflections
    .filter((r) => r.memoryId === memoryId)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
}

// Determine the "memory of the day" - using a simple hash based on current date
export function getMemoryOfTheDay(memories: Memory[]): string | null {
  if (memories.length === 0) return null;
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const index = dayOfYear % memories.length;
  return memories[index].id;
}
