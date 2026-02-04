import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AddMemoryForm } from "@/components/AddMemoryForm";
import { apiClient } from "@/lib/api";

interface AddMemoryProps {
  slug?: string;
}

const AddMemory = ({ slug: propSlug }: AddMemoryProps) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = paramSlug || propSlug || 'eleanor-thompson';

  const handleSubmit = async (data: {
    type: string;
    content: string;
    authorName?: string;
    media?: File;
  }) => {
    try {
      await apiClient.createMemory(slug, data);
      // Form will handle redirect
    } catch (error) {
      console.error('Failed to create memory:', error);
      throw error;
    }
  };

  return (
    <Layout showFab={false}>
      <h1 className="font-serif text-2xl text-foreground mb-8 text-center sm:text-left">
        Share a Memory
      </h1>
      <AddMemoryForm onSubmit={handleSubmit} slug={slug} />
    </Layout>
  );
};

export default AddMemory;
