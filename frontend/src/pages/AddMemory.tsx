import { Layout } from "@/components/Layout";
import { AddMemoryForm } from "@/components/AddMemoryForm";
import { Memory } from "@/types/memory";

const AddMemory = () => {
  const handleSubmit = (memory: Omit<Memory, "id" | "createdAt">) => {
    // In a real app, this would save to a backend
    console.log("New memory:", memory);
    // The form handles the redirect after showing the thank you message
  };

  return (
    <Layout showFab={false}>
      <h1 className="font-serif text-2xl text-foreground mb-8 text-center sm:text-left">
        Share a Memory
      </h1>
      <AddMemoryForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default AddMemory;
