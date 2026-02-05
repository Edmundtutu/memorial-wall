import { NavLink } from "@/components/NavLink";
import { Home, Image, Quote, PenLine } from "lucide-react";
import { useParams } from "react-router-dom";

export function DesktopNav() {
  const { slug } = useParams<{ slug?: string }>();

  const navItems = slug
    ? [
        { to: `/memorial/${slug}`, label: "Memories", icon: Home },
        { to: `/memorial/${slug}/moments`, label: "Moments", icon: Image },
        { to: `/memorial/${slug}/quotes`, label: "Quotes", icon: Quote },
        { to: `/memorial/${slug}/add`, label: "Add Memory", icon: PenLine },
      ]
    : [
        { to: "/", label: "Home", icon: Home, end: true },
      ];

  return (
    <nav className="hidden sm:flex items-center gap-6 py-4">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
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
