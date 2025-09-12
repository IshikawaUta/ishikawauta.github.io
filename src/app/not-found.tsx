
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Frown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const floatingChars = ['4', '0', '4', '?', '!', '(', ')'];

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return a placeholder or null during server-side rendering
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh] relative overflow-hidden p-4">
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0 opacity-50">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-primary/10 font-bold -z-10 animate-float"
            style={{
              fontSize: `${Math.random() * 8 + 4}rem`, // 4rem to 12rem
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 15}s`, // 15s to 35s
            }}
          >
            {floatingChars[Math.floor(Math.random() * floatingChars.length)]}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center animate__animated animate__fadeInUp">
        <Frown className="w-24 h-24 text-primary/30 mb-4" />
        
        <h1 
          className="text-8xl md:text-9xl font-black text-primary"
          style={{ textShadow: '4px 4px 0px hsl(var(--foreground) / 0.1)' }}
        >
          404
        </h1>
        
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-foreground">
          Page Not Found
        </h2>
        
        <p className="mt-2 text-md md:text-lg text-foreground/70 max-w-md">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        
        <Button asChild size="lg" className="mt-8 btn-shine-effect">
          <Link href="/">
            <Home className="mr-2" />
            Go Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
