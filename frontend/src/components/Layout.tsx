import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { FloatingAddButton } from "@/components/FloatingAddButton";
import { Footer } from "@/components/Footer";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Memorial } from "@/lib/api";

interface LayoutProps {
  children: ReactNode;
  showFab?: boolean;
  memorial?: Memorial | null;
}

export function Layout({ children, showFab = true, memorial }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop navigation - above profile header, separate sticky element */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-2xl mx-auto">
          <div className="pt-6 sm:pt-8 px-6">
            <DesktopNav />
          </div>
        </div>
      </div>

      {/* Profile Header - cover and avatar only */}
      <ProfileHeader memorial={memorial} />

      {/* Bio Details Section - neutral background, outside sticky header */}
      <div className="bg-background border-b border-border">
        <div className="container max-w-2xl mx-auto px-6 py-6 sm:py-8">
          {memorial && (
            <div className="flex flex-col items-center sm:items-start mb-6">
              <h1 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-2 text-center sm:text-left">
                {memorial.name || 'Memorial'}
              </h1>
              
              {(memorial.dateOfBirth || memorial.dateOfPassing) && (
                <div className="font-sans text-sm text-muted-foreground mb-3 text-center sm:text-left">
                  {memorial.dateOfBirth && (
                    <span>
                      {new Date(memorial.dateOfBirth).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      {memorial.dateOfPassing && ' — '}
                    </span>
                  )}
                  {memorial.dateOfPassing && (
                    <span>
                      {new Date(memorial.dateOfPassing).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  )}
                </div>
              )}
              
              {memorial.dedication && (
                <p className="font-serif text-base text-muted-foreground leading-relaxed max-w-2xl text-center sm:text-left">
                  {memorial.dedication}
                </p>
              )}
            </div>
          )}
          
          <Link to="/" className="block">
            <p className="font-serif text-lg sm:text-xl text-muted-foreground text-center sm:text-left">
              <span
                className="inline-block px-3 py-1 rounded-full bg-muted/60 font-serif text-base sm:text-lg text-muted-foreground/80 tracking-wide shadow-[0_1px_4px_0_rgba(80,80,100,0.04)] border border-border/60 backdrop-blur-[2px] text-center"
                style={{
                  letterSpacing: '0.02em',
                  fontVariant: 'all-small-caps',
                  opacity: 0.94,
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {`Share any moment, adventures, experiences or lessons from ${memorial?.name || 'your loved one'}`}
              </span>
            </p>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <main className="container max-w-2xl mx-auto px-6 pb-24 sm:pb-8">
        {children}
      </main>

      <div className="container max-w-2xl mx-auto px-6">
        <Footer />
      </div>

      {/* Mobile navigation */}
      <MobileBottomNav />
      
      {/* Mobile FAB */}
      {showFab && <FloatingAddButton />}
    </div>
  );
}