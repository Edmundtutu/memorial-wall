import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { MemoryWall } from "@/components/MemoryWall";
import { sampleMemories, sampleReflections } from "@/data/memories";
import { Memory, Reflection } from "@/types/memory";

const Index = () => {
  const [memories] = useState<Memory[]>(sampleMemories);
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
      {/* Add Memory action - desktop only, quiet but present */}
      <div className="hidden sm:flex justify-end mb-8">
        <Link to="/add" className="btn">
          Add a Memory
        </Link>
      </div>

      {/* Memory Wall */}
      <MemoryWall
        memories={memories}
        reflections={reflections}
        onAddReflection={handleAddReflection}
      />
    </Layout>
  );
};

export default Index;
