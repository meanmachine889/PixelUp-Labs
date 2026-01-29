import React from 'react';
import { cn } from '@/lib/utils';

interface CornerBorderCardProps {
  children: React.ReactNode;
  className?: string;
  cornerSize?: number;
}

export function CornerBorderCard({
  children,
  className,
  cornerSize = 8,
}: CornerBorderCardProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Main border */}
      <div className="absolute inset-0 border border-sidebar-border pointer-events-none" />
      
      {/* Top-left corner */}   
      <div
        className="absolute top-0 left-0 bg-zinc-800 pointer-events-none"
        style={{
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Top-right corner */}
      <div
        className="absolute top-0 right-0 bg-zinc-800 pointer-events-none"
        style={{
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          transform: 'translate(50%, -50%)',
        }}
      />
      
      {/* Bottom-left corner */}
      <div
        className="absolute bottom-0 left-0 bg-zinc-800 pointer-events-none"
        style={{
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          transform: 'translate(-50%, 50%)',
        }}
      />
      
      {/* Bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 bg-zinc-800 pointer-events-none"
        style={{
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          transform: 'translate(50%, 50%)',
        }}
      />
      
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
