
'use client';

import React from 'react';
import { Star } from 'lucide-react';

const StarCursor = () => {
  React.useEffect(() => {
    const cursorContainer = document.createElement('div');
    cursorContainer.className = 'star-cursor';
    document.body.appendChild(cursorContainer);

    const handleMouseMove = (e: MouseEvent) => {
      const star = document.createElement('div');
      star.className = 'star';
      
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("xmlns", svgNS);
      svg.setAttribute("width", (Math.random() * 15 + 10).toString());
      svg.setAttribute("height", (Math.random() * 15 + 10).toString());
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "currentColor");
      svg.setAttribute("stroke", "none");

      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z");
      svg.appendChild(path);
      star.appendChild(svg);
      
      cursorContainer.appendChild(star);

      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      
      const randomX = Math.random() * 100 - 50;
      const randomY = Math.random() * 100 - 50;
      star.style.transform = `translate(${randomX}px, ${randomY}px)`;

      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (document.body.contains(cursorContainer)) {
        document.body.removeChild(cursorContainer);
      }
    };
  }, []);

  return null;
};

export default StarCursor;
