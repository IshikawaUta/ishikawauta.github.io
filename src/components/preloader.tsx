'use client';

import { TypeAnimation } from 'react-type-animation';

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="flex flex-col items-center gap-6">
        <div className="cube-loader">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
        <TypeAnimation
          sequence={['Welcome...', 1000]}
          wrapper="span"
          speed={50}
          className="text-2xl font-semibold text-primary"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Preloader;
