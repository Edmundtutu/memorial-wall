import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { MemoryWall } from "@/components/MemoryWall";
import { Memory, Reflection } from "@/types/memory";
import { apiClient, Memorial } from "@/lib/api";

const Quotes = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const [memorial, setMemorial] = useState<Memorial | null>(null);
  const [memories, setMemories] = useState<Memory[]>([]);
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Require slug - if not present, show error
    if (!slug) {
      setError('Memorial slug is required');
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch memorial data
        const memorialData = await apiClient.getMemorial(slug);
        setMemorial(memorialData);
        
        const memoriesData = await apiClient.getMemories(slug);
        const filtered = memoriesData.filter((m) => m.type === "quote");
        setMemories(filtered);
        
        const reflectionsPromises = filtered.map(m => apiClient.getReflections(m.id));
        const reflectionsData = await Promise.all(reflectionsPromises);
        setReflections(reflectionsData.flat());
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
      <Layout memorial={memorial}>
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
          <p className="font-serif text-lg text-destructive mb-4">{error}</p>
          <p className="font-sans text-sm text-muted-foreground">
            {error === 'Memorial slug is required' 
              ? 'Please provide a valid memorial slug in the URL.'
              : 'The memorial you\'re looking for may not exist or is no longer available.'}
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout memorial={memorial}>
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
