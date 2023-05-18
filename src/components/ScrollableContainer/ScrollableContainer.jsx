import React, { useRef, useState, useEffect } from "react";
import "./ScrollableContainer.css";

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + containerWidth < scrollWidth);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (value) => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const maxScrollLeft = scrollWidth - containerWidth;

    if (value > 0 && scrollLeft < maxScrollLeft) {
      const nextElement = container.querySelector(
        ":scope > .scrollable-item:not(.scrollable-item:first-child)"
      );

      if (nextElement) {
        const nextElementRect = nextElement.getBoundingClientRect();
        const elementRightOffset =
          nextElementRect.right - container.getBoundingClientRect().right;

        if (elementRightOffset > 0 && elementRightOffset < containerWidth) {
          const scrollIncrement = 20;
          const remainingScrollDistance = Math.min(elementRightOffset, value);
          let scrollDistance = 0;

          const scrollInterval = setInterval(() => {
            scrollDistance += scrollIncrement;
            container.scrollLeft += scrollIncrement;

            if (scrollDistance >= remainingScrollDistance) {
              clearInterval(scrollInterval);
            }
          }, 10);

          return;
        }
      }
    }

    container.scrollLeft += value;
  };




  return (
    <div className="scrollable-container">
      <div className="arrowsContainer">
        <i
          className={`fa-solid fa-circle-arrow-left  ${
            canScrollLeft ? "" : "disabled"
          }`}
          onClick={() => {
            handleScroll(-(containerRef.current.clientWidth + 5));
          }}
        ></i>
        <i
          className={`fa-solid fa-circle-arrow-right ${
            canScrollRight ? "" : "disabled"
          }`}
          onClick={() => {
            handleScroll(containerRef.current.clientWidth + 5);
          }}
        ></i>
      </div>
      <div className="scrollable-content" ref={containerRef}>
        {React.Children.map(children, (child) => (
          <div className="scrollable-item">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableContainer;
