import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const scrollY =
          document.body.scrollTop || document.documentElement.scrollTop;

        console.log("==========");
        console.log(scrollY);
        setOffset(scrollY/25);
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
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
