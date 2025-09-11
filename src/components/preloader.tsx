'use client';

import { Code2 } from 'lucide-react';

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="loader-logo">
        <Code2 className="w-16 h-16 text-primary" />
      </div>
    </div>
  );
};

export default Preloader;
