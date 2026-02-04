import { Memory, Reflection } from "@/types/memory";
import { MemoryCard } from "./MemoryCard";
import { getMemoryOfTheDay } from "@/data/memories";

interface MemoryWallProps {
  memories: Memory[];
  reflections: Reflection[];
  onAddReflection: (memoryId: number, content: string, authorName?: string) => void;
}

export function MemoryWall({ memories, reflections, onAddReflection }: MemoryWallProps) {
  const memoryOfTheDayId = getMemoryOfTheDay(memories);

  // Chronological order - oldest first, newest at bottom
  const sortedMemories = [...memories].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const getReflectionsForMemory = (memoryId: number): Reflection[] => {
    return reflections
      .filter((r) => r.memoryId === memoryId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  };

  if (memories.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-serif text-lg text-muted-foreground">
          No memories have been shared yet.
        </p>
        <p className="font-serif text-lg text-muted-foreground mt-2">
          Be the first to share a memory.
        </p>
      </div>
    );
  }

  return (
    <div className="space-contemplative">
      {sortedMemories.map((memory) => (
        <MemoryCard
          key={memory.id}
          memory={memory}
          reflections={getReflectionsForMemory(memory.id)}
          isHighlighted={memory.id === memoryOfTheDayId}
          onAddReflection={onAddReflection}
        />
      ))}
    </div>
  );
}
