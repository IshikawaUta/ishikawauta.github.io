
'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const NextTopLoader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPath = useRef(pathname + searchParams.toString());

  useEffect(() => {
    const currentPath = pathname + searchParams.toString();
    if (previousPath.current !== currentPath) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        previousPath.current = currentPath;
      }, 750); // Match animation duration
      return () => clearTimeout(timer);
    } else {
       setLoading(false);
    }
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div id="nprogress">
      <div className="bar" />
    </div>
  );
};

export default NextTopLoader;
