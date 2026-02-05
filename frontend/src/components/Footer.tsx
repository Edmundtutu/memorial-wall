import { Link, useParams } from "react-router-dom";

export function Footer() {
  const { slug } = useParams<{ slug?: string }>();

  const addMemoryHref = slug ? `/memorial/${slug}/add` : null;

  return (
    <footer className="py-12 mt-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-sans text-muted-foreground">
        {addMemoryHref && (
          <Link 
            to={addMemoryHref} 
            className="hover:text-foreground transition-colors"
          >
            Add a Memory
          </Link>
        )}
      </div>
    </footer>
  );
}
