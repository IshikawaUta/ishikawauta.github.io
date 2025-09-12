
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const NextTopLoader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleStart = (url: string) => {
      const currentUrl = `${pathname}${searchParams.toString()}`;
      if (url !== currentUrl) {
        setLoading(true);
      }
    };
    
    const handleComplete = () => setLoading(false);

    // This is a simplified way to hook into router changes.
    // In a real app, you might use Next.js's router events if they were available in App Router.
    // For now, we rely on the above useEffect for completion.
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      handleStart(args[2] as string);
      originalPushState.apply(history, args);
    };

    window.addEventListener('popstate', handleComplete);

    return () => {
      history.pushState = originalPushState;
      window.removeEventListener('popstate', handleComplete);
    };
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div id="nprogress">
      <div className="bar" />
    </div>
  );
};

export default NextTopLoader;
