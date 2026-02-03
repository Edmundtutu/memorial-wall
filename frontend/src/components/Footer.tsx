import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-12 mt-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-sans text-muted-foreground">
        <Link 
          to="/add" 
          className="hover:text-foreground transition-colors"
        >
          Add a Memory
        </Link>
      </div>
    </footer>
  );
}
