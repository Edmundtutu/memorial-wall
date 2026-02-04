import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface AddMemoryFormProps {
  slug: string;
  onSubmit: (data: {
    type: string;
    content: string;
    authorName?: string;
    media?: File;
  }) => Promise<void>;
}

export function AddMemoryForm({ slug, onSubmit }: AddMemoryFormProps) {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [type, setType] = useState<"text" | "image" | "video" | "quote">("text");
  const [media, setMedia] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit({
        type,
        content: content.trim(),
        authorName: authorName.trim() || undefined,
        media: media || undefined,
      });

      // Show thank you message and pause
      setShowThankYou(true);
      
      // Wait 4 seconds before redirecting
      setTimeout(() => {
        navigate(`/memorial/${slug}`);
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit memory');
      setIsSubmitting(false);
    }
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
      {error && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive rounded-md">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

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
            { value: "video", label: "A video" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setType(option.value as typeof type)}
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

      {/* Media upload for image/video types */}
      {(type === "image" || type === "video") && (
        <div className="mb-6">
          <label className="font-sans text-sm text-muted-foreground block mb-2">
            Upload {type === "image" ? "photo" : "video"} (optional)
          </label>
          <input
            type="file"
            accept={type === "image" ? "image/*" : "video/*"}
            onChange={handleFileChange}
            className="input"
          />
          {media && (
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Selected: {media.name}
            </p>
          )}
        </div>
      )}

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
        <Link to={`/memorial/${slug}`} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
          Return to memories
        </Link>
        <button
          type="submit"
          disabled={!content.trim() || isSubmitting}
          className="btn btn--primary"
        >
          {isSubmitting ? 'Sharing...' : 'Share Memory'}
        </button>
      </div>
    </form>
  );
}
