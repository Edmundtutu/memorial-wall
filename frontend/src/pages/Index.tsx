import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { MemoryWall } from "@/components/MemoryWall";
import { Memory, Reflection } from "@/types/memory";
import { apiClient } from "@/lib/api";

interface IndexProps {
  slug?: string;
}

const Index = ({ slug: propSlug }: IndexProps) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = paramSlug || propSlug || 'eleanor-thompson';
  
  const [memories, setMemories] = useState<Memory[]>([]);
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch memories
        const memoriesData = await apiClient.getMemories(slug);
        setMemories(memoriesData);
        
        // Fetch reflections for all memories
        const reflectionsPromises = memoriesData.map(m => 
          apiClient.getReflections(m.id)
        );
        const reflectionsData = await Promise.all(reflectionsPromises);
        const allReflections = reflectionsData.flat();
        setReflections(allReflections);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
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

  if (error) {
    return (
      <Layout>
        <div className="text-center py-16">
          <p className="font-serif text-lg text-destructive">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Add Memory action - desktop only, quiet but present */}
      <div className="hidden sm:flex justify-end mb-8">
        <Link to={`/memorial/${slug}/add`} className="btn">
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
