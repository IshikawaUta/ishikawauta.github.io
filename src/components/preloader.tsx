'use client';

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="cube-loader">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face left"></div>
        <div className="cube-face right"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
  );
};

export default Preloader;
