import { useState } from "react";
import { Layout } from "@/components/Layout";
import { MemoryWall } from "@/components/MemoryWall";
import { sampleMemories, sampleReflections } from "@/data/memories";
import { Memory, Reflection } from "@/types/memory";

const Quotes = () => {
  const [memories] = useState<Memory[]>(
    sampleMemories.filter((m) => m.type === "quote")
  );
  const [reflections, setReflections] = useState<Reflection[]>(sampleReflections);

  const handleAddReflection = (
    memoryId: string,
    content: string,
    authorName?: string
  ) => {
    const newReflection: Reflection = {
      id: `r${Date.now()}`,
      memoryId,
      content,
      authorName,
      createdAt: new Date(),
    };
    setReflections((prev) => [...prev, newReflection]);
  };

  return (
    <Layout>
      <div className="mb-6">
        <p className="font-serif text-lg text-muted-foreground">
          Words that remind us of them.
        </p>
      </div>

      <MemoryWall
        memories={memories}
        reflections={reflections}
        onAddReflection={handleAddReflection}
      />
    </Layout>
  );
};

export default Quotes;
