import { useState } from "react";
import { Memory } from "@/types/memory";
import { Link, useNavigate } from "react-router-dom";

interface AddMemoryFormProps {
  onSubmit: (memory: Omit<Memory, "id" | "createdAt">) => void;
}

export function AddMemoryForm({ onSubmit }: AddMemoryFormProps) {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [type, setType] = useState<Memory["type"]>("text");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);

    // Create the memory
    onSubmit({
      type,
      content: content.trim(),
      authorName: authorName.trim() || undefined,
    });

    // Show thank you message and pause
    setShowThankYou(true);
    
    // Wait 4 seconds before redirecting
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  if (showThankYou) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="font-serif text-xl text-foreground leading-relaxed">
            Thank you for sharing.
          </p>
          <p className="font-serif text-xl text-muted-foreground mt-2 leading-relaxed">
            Take a moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Memory type selection */}
      <div className="mb-6">
        <label className="font-sans text-sm text-muted-foreground block mb-3">
          What would you like to share?
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "text", label: "A memory" },
            { value: "quote", label: "A quote" },
            { value: "image", label: "A photo" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setType(option.value as Memory["type"])}
              className={`btn ${
                type === option.value ? "btn--primary" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content textarea */}
      <div className="mb-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={
            type === "quote"
              ? "Share a quote that reminds you of them..."
              : "Share a memory..."
          }
          className="textarea w-full min-h-[240px]"
          autoFocus
          required
        />
      </div>

      {/* Optional name */}
      <div className="mb-8">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name (optional)"
          className="input max-w-xs"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Link to="/" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
          Return to memories
        </Link>
        <button
          type="submit"
          disabled={!content.trim() || isSubmitting}
          className="btn btn--primary"
        >
          Share Memory
        </button>
      </div>
    </form>
  );
}
