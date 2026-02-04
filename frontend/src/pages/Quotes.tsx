import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { MemoryWall } from "@/components/MemoryWall";
import { Memory, Reflection } from "@/types/memory";
import { apiClient } from "@/lib/api";

interface QuotesProps {
  slug?: string;
}

const Quotes = ({ slug: propSlug }: QuotesProps) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = paramSlug || propSlug || 'eleanor-thompson';
  
  const [memories, setMemories] = useState<Memory[]>([]);
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const memoriesData = await apiClient.getMemories(slug);
        const filtered = memoriesData.filter((m) => m.type === "quote");
        setMemories(filtered);
        
        const reflectionsPromises = filtered.map(m => apiClient.getReflections(m.id));
        const reflectionsData = await Promise.all(reflectionsPromises);
        setReflections(reflectionsData.flat());
      } catch (err) {
        console.error('Failed to load data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleAddReflection = async (
    memoryId: number,
    content: string,
    authorName?: string
  ) => {
    try {
      const newReflection = await apiClient.createReflection(memoryId, {
        content,
        authorName,
      });
      setReflections((prev) => [...prev, newReflection]);
    } catch (err) {
      console.error('Failed to add reflection:', err);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="text-center py-16">
          <p className="font-serif text-lg text-muted-foreground">Loading...</p>
        </div>
      </Layout>
    );
  }

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
