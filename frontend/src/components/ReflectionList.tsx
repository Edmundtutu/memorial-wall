import { Reflection } from "@/types/memory";
import { ReflectionItem } from "./ReflectionItem";

interface ReflectionListProps {
  reflections: Reflection[];
}

export function ReflectionList({ reflections }: ReflectionListProps) {
  if (reflections.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 pt-6 border-t border-border">
      <h3 className="font-sans text-sm text-muted-foreground mb-2">
        Reflections
      </h3>
      <div className="divide-y divide-border">
        {reflections.map((reflection) => (
          <ReflectionItem key={reflection.id} reflection={reflection} />
        ))}
      </div>
    </div>
  );
}
