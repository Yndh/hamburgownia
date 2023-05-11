import { useRef, useState, useEffect } from "react";

import "./Recommend.css";
import { MEALS } from "../../../data/data";

const Recommend = () => {
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

  const getMaxScrollPosition = () => {
    const container = containerRef.current;
    const content = contentRef.current;
    const containerStyle = getComputedStyle(container);
    const paddingLeft = parseInt(containerStyle.paddingLeft, 10);
    const paddingRight = parseInt(containerStyle.paddingRight, 10);
    const borderLeftWidth = parseInt(containerStyle.borderLeftWidth, 10);
    const borderRightWidth = parseInt(containerStyle.borderRightWidth, 10);
    const containerWidth = container.clientWidth;
    const contentWidth = content.offsetWidth;
    return (
      contentWidth -
      containerWidth -
      paddingLeft -
      paddingRight -
      borderLeftWidth -
      borderRightWidth
    );
  };

  const filteredMeals = MEALS.filter((meal) => meal.categoryId === 2);

  

  return (
    <div className="recommended">
      <h3>
        W Zestawie <span className="color">Taniej!</span>
      </h3>

      <div className="recommendedRowContainer">
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
        <div className="recommendedRow" ref={containerRef}>
          {filteredMeals.map((meal) => (
            <div className="product" ref={contentRef}>
              <span className="price">{meal.price} zł</span>
              <span className="title">
                {meal.title.split(" ").map((word, index) => {
                  if (index == 0) {
                    return <span className="darkColor">{word}</span>;
                  } else {
                    return word;
                  }
                })}
              </span>
              <span className="desc">{meal.description}</span>

              <img
                src={meal.imageUrl}
                alt={meal.title}
                className="productImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recommend;
