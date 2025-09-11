
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import StarCursor from '@/components/star-cursor';
import Preloader from '@/components/preloader';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient && isLoading && <Preloader />}
      <div className={cn({ 'animate__animated animate__fadeIn': !isLoading, 'opacity-0': isLoading })}>
        <StarCursor />
        <Header />
        <main
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        >
          {children}
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}
