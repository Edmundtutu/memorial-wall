import { Reflection } from "@/types/memory";
import { formatMemoryDate } from "@/lib/date";

interface ReflectionItemProps {
  reflection: Reflection;
}

export function ReflectionItem({ reflection }: ReflectionItemProps) {
  return (
    <div className="py-4">
      <p className="text-reflection text-foreground">{reflection.content}</p>
      <div className="mt-3 flex items-center gap-2 meta">
        {reflection.authorName && (
          <>
            <span>— {reflection.authorName}</span>
            <span aria-hidden="true">·</span>
          </>
        )}
        <time dateTime={reflection.createdAt.toISOString()}>
          {formatMemoryDate(reflection.createdAt)}
        </time>
      </div>
    </div>
  );
}
