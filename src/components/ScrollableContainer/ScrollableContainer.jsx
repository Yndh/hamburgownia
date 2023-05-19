import React, { useRef, useState, useEffect } from "react";

import "./ScrollableContainer.css";

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(contentRect.right > containerRect.right);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize state on mount

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (value) => {
    containerRef.current.scrollLeft += value;
  };

  return (
    <div className="scrollable-container">
      <div className="arrowsContainer">
        <i
          className={`fa-solid fa-circle-arrow-left  ${
            canScrollLeft ? "" : "disabled"
          }`}
          onClick={() => {
            handleScroll(-500);
          }}
        ></i>
        <i
          className={`fa-solid fa-circle-arrow-right ${
            canScrollRight ? "" : "disabled"
          }`}
          onClick={() => {
            handleScroll(500);
          }}
        ></i>
      </div>
      <div className="scrollable-content" ref={containerRef}>
        {React.Children.map(children, (child) => (
          <div className="scrollable-item" ref={contentRef}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableContainer;
