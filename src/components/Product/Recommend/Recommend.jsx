import "./Recommend.css";
import ScrollableContainer from "../../ScrollableContainer/ScrollableContainer";
import { MEALS } from "../../../data/data";

const Recommend = (props) => {
  const mealsBundle = MEALS.filter(
    (meal) => meal.categoryId === 2 && meal.id != props.mealId
  );
  const recommendedMeals = MEALS.filter(
    (meal) => meal.categoryId === 1 && meal.id != props.mealId
  );

  return (
    <div className="recommended">
      <h3>
        W Zestawie <span className="color">Taniej!</span>
      </h3>

      <ScrollableContainer>
        {mealsBundle.map((meal) => (
          <div className="scrollableCont">
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
      </ScrollableContainer>
      <h3>
        Polubisz <span className="color">też...</span>
      </h3>

      <ScrollableContainer>
        {recommendedMeals.map((meal) => (
          <div className="scrollableCont">
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
      </ScrollableContainer>
    </div>
  );
};
export default Recommend;
