import { Memorial } from "@/lib/api";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  memorial: Memorial | null;
}

export function ProfileHeader({ memorial }: ProfileHeaderProps) {
  const { collapseProgress } = useScrollPosition();

  // Determine image URLs with fallbacks
  const coverImageUrl = memorial?.coverImage || '/assets/default-cover.jpg';
  const avatarImageUrl = memorial?.avatar || memorial?.coverImage || '/assets/default-cover.jpg';

  // Calculate dynamic values based on scroll - X/Twitter inspired behavior
  // Cover: Progressive collapse from 200px to 0px (complete disappearance)
  const coverHeight = Math.max(200 - (collapseProgress * 200), 0);
  
  // Cover opacity: Fade out progressively as height reduces
  const coverOpacity = Math.max(1 - (collapseProgress * 1.2), 0);
  
  // Avatar: Minimal shrink, strong persistence
  // Desktop: 140px → 120px (only 20px reduction)
  const avatarSizeDesktop = Math.max(140 - (collapseProgress * 20), 120);
  // Mobile: 110px → 90px (only 20px reduction)
  const avatarSizeMobile = Math.max(110 - (collapseProgress * 20), 90);

  return (
    <header className="relative">
      {/* Sticky container for cover + avatar */}
      <div className="sticky top-[73px] sm:top-[81px] z-30 bg-background">
        {/* Cover Image Banner - Full width, shallow, collapses first */}
        <div 
          className="relative w-full overflow-visible bg-muted"
          style={{ 
            height: `${coverHeight}px`,
            transition: 'height 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {coverHeight > 0 && (
            <img
              src={coverImageUrl}
              alt=""
              className="w-full h-full object-cover"
              style={{
                opacity: coverOpacity,
                transition: 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          )}

          {/* Avatar embedded in cover area - positioned to overlap bottom edge significantly */}
          {/* Container for responsive max-width */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="container max-w-2xl mx-auto relative">
              {/* Desktop Avatar - Left-aligned, embedded into cover with deep overlap */}
              <div
                className={cn(
                  "hidden sm:block absolute",
                  "left-6"
                )}
                style={{
                  bottom: `${-(avatarSizeDesktop * 0.35)}px`, // 35% of avatar extends below cover
                  transition: 'bottom 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <img
                  src={avatarImageUrl}
                  alt={memorial?.name ? `${memorial.name}'s portrait` : 'Memorial portrait'}
                  className="rounded-full object-cover border-4 border-background shadow-lg"
                  style={{
                    width: `${avatarSizeDesktop}px`,
                    height: `${avatarSizeDesktop}px`,
                    transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1), height 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Mobile Avatar - Centered, embedded into cover with deep overlap */}
              <div
                className={cn(
                  "sm:hidden absolute",
                  "left-1/2 -translate-x-1/2"
                )}
                style={{
                  bottom: `${-(avatarSizeMobile * 0.35)}px`, // 35% of avatar extends below cover
                  transition: 'bottom 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <img
                  src={avatarImageUrl}
                  alt={memorial?.name ? `${memorial.name}'s portrait` : 'Memorial portrait'}
                  className="rounded-full object-cover border-4 border-background shadow-lg"
                  style={{
                    width: `${avatarSizeMobile}px`,
                    height: `${avatarSizeMobile}px`,
                    transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1), height 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Spacing below cover to accommodate protruding avatar portion */}
        <div 
          style={{ 
            height: `${Math.max(avatarSizeDesktop * 0.35 + 16, avatarSizeMobile * 0.35 + 16)}px`,
            transition: 'height 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
          }} 
        />
      </div>
    </header>
  );
}