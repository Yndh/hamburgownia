import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        console.log(window.scrollY);
        setOffset(window.scrollY/10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="slider">
      <span
        className="sliderText"
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•
      </span>
      <span
        className="sliderText"
        style={{
          transform: `translateX(${-offset}px)`,
        }}
      >
        HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•
      </span>
      <span
        className="sliderText"
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•
      </span>
      <span
        className="sliderText"
        style={{
          transform: `translateX(${-offset}px)`,
        }}
      >
        HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•HAM•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•BURGOWNIA•
      </span>
    </div>
  );
};
export default Slider;
