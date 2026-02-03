import { Memory, Reflection } from "@/types/memory";
import { formatMemoryDate } from "@/lib/date";
import { ReflectionList } from "./ReflectionList";
import { AddReflectionForm } from "./AddReflectionForm";
import { cn } from "@/lib/utils";

interface MemoryCardProps {
  memory: Memory;
  reflections: Reflection[];
  isHighlighted?: boolean;
  onAddReflection: (memoryId: string, content: string, authorName?: string) => void;
}

export function MemoryCard({
  memory,
  reflections,
  isHighlighted = false,
  onAddReflection,
}: MemoryCardProps) {
  const handleAddReflection = (content: string, authorName?: string) => {
    onAddReflection(memory.id, content, authorName);
  };

  return (
    <article
      className={cn(
        "memory-card",
        isHighlighted && "memory-card--highlighted"
      )}
    >
      {/* Memory content */}
      <div className={memory.type === "quote" ? "quote" : ""}>
        <p className="text-memory text-foreground whitespace-pre-wrap">
          {memory.content}
        </p>
      </div>

      {/* Media (if present) */}
      {memory.mediaUrl && memory.type === "image" && (
        <figure className="mt-6">
          <img
            src={memory.mediaUrl}
            alt=""
            className="w-full max-h-[400px] object-cover"
            style={{ borderRadius: "var(--radius)" }}
          />
        </figure>
      )}

      {memory.mediaUrl && memory.type === "video" && (
        <figure className="mt-6">
          <video
            src={memory.mediaUrl}
            controls
            className="w-full max-h-[400px]"
            style={{ borderRadius: "var(--radius)" }}
          />
        </figure>
      )}

      {/* Meta information */}
      <footer className="mt-6 flex items-center gap-2 meta">
        {memory.authorName && (
          <>
            <span>— {memory.authorName}</span>
            <span aria-hidden="true">·</span>
          </>
        )}
        <time dateTime={memory.createdAt.toISOString()}>
          {formatMemoryDate(memory.createdAt)}
        </time>
      </footer>

      {/* Reflections */}
      <ReflectionList reflections={reflections} />
      
      {/* Add reflection form */}
      <AddReflectionForm
        memoryId={memory.id}
        onSubmit={handleAddReflection}
      />
    </article>
  );
}
