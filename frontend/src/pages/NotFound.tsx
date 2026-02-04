import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <p className="font-serif text-xl text-foreground mb-4">
          This page doesn't exist.
        </p>
        <Link 
          to="/" 
          className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
