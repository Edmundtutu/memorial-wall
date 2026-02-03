import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

export function FloatingAddButton() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const isHidden = scrollDirection === "down" && !isAtTop;

  return (
    <Link
      to="/add"
      className={cn(
        "fixed right-4 bottom-20 z-50 sm:hidden",
        "flex items-center justify-center",
        "h-12 w-12 rounded-full",
        "bg-foreground/10 hover:bg-foreground/15",
        "border border-border/50",
        "text-foreground/70 hover:text-foreground",
        "transition-all duration-300 ease-out",
        "backdrop-blur-sm",
        isHidden && "translate-y-24 opacity-0"
      )}
      aria-label="Add a Memory"
    >
      <Plus className="h-5 w-5" strokeWidth={1.5} />
    </Link>
  );
}
