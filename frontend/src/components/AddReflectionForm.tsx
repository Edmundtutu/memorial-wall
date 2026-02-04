import { useState } from "react";

interface AddReflectionFormProps {
  memoryId: number;
  onSubmit: (content: string, authorName?: string) => void;
}

export function AddReflectionForm({ onSubmit }: AddReflectionFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    onSubmit(content.trim(), authorName.trim() || undefined);
    setContent("");
    setAuthorName("");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Add a reflection
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 pt-6 border-t border-border">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Share a reflection..."
        className="textarea w-full min-h-[120px]"
        autoFocus
      />
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name (optional)"
          className="input sm:max-w-[200px]"
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="btn"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!content.trim()}
            className="btn btn--primary"
          >
            Share
          </button>
        </div>
      </div>
    </form>
  );
}
