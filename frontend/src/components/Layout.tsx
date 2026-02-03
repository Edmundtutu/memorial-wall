import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { FloatingAddButton } from "@/components/FloatingAddButton";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
  showFab?: boolean;
}

export function Layout({ children, showFab = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop header with navigation */}
      <header className="container max-w-2xl">
        <div className="pt-6 sm:pt-8">
          <DesktopNav />
        </div>
        
        {/* Tagline */}
        <div className="py-6 sm:py-10">
          <Link to="/" className="block">
            <p className="font-serif text-lg sm:text-xl text-muted-foreground text-center sm:text-left">
              A shared space for remembering.
            </p>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-2xl pb-24 sm:pb-8">
        {children}
      </main>

      <div className="container max-w-2xl">
        <Footer />
      </div>

      {/* Mobile navigation */}
      <MobileBottomNav />
      
      {/* Mobile FAB */}
      {showFab && <FloatingAddButton />}
    </div>
  );
}
