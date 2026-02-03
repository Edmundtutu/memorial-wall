import { NavLink } from "@/components/NavLink";
import { Home, Image, Quote, PenLine } from "lucide-react";

const navItems = [
  { to: "/", label: "Memories", icon: Home },
  { to: "/moments", label: "Moments", icon: Image },
  { to: "/quotes", label: "Quotes", icon: Quote },
  { to: "/add", label: "Add Memory", icon: PenLine },
];

export function DesktopNav() {
  return (
    <nav className="hidden sm:flex items-center gap-6 py-4">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className="flex items-center gap-2 text-sm font-sans text-muted-foreground transition-colors duration-200 hover:text-foreground"
          activeClassName="text-foreground"
        >
          <item.icon className="h-4 w-4" strokeWidth={1.5} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
