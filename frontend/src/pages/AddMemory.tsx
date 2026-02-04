import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AddMemoryForm } from "@/components/AddMemoryForm";
import { apiClient } from "@/lib/api";

const AddMemory = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <Layout showFab={false}>
        <div className="text-center py-16">
          <p className="font-serif text-lg text-destructive mb-4">
            Memorial slug is required
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Please provide a valid memorial slug in the URL.
          </p>
        </div>
      </Layout>
    );
  }

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
