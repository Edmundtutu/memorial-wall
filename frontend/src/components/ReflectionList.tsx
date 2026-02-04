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
      <h3 className="font-sans text-xs text-muted-foreground mb-3 uppercase tracking-wide">
        Reflections
      </h3>
      <div className="pl-6 sm:pl-8 border-l border-border/50 divide-y divide-border/50">
        {reflections.map((reflection) => (
          <ReflectionItem key={reflection.id} reflection={reflection} />
        ))}
      </div>
    </div>
  );
}
