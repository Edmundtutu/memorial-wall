import { NavLink } from "@/components/NavLink";
import { Home, Image, Quote } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Memories", icon: Home },
  { to: "/moments", label: "Moments", icon: Image },
  { to: "/quotes", label: "Quotes", icon: Quote },
];

export function MobileBottomNav() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const isHidden = scrollDirection === "down" && !isAtTop;

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 sm:hidden",
        "border-t border-border bg-background/95 backdrop-blur-sm",
        "transition-transform duration-300 ease-out",
        isHidden && "translate-y-full"
      )}
    >
      <div className="flex items-center justify-center gap-8 px-6 py-3 max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className="flex flex-col items-center gap-1 text-muted-foreground transition-colors duration-200"
            activeClassName="text-foreground"
          >
            <item.icon className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-xs font-sans">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
