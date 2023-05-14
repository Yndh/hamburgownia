import { Link } from 'react-router-dom'

import "./Recommend.css";
import ScrollableContainer from "../../ScrollableContainer/ScrollableContainer";
import ProductElement from '../../ProductElement/ProductElement';
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
          <ProductElement meal={meal}/>
        ))}
      </ScrollableContainer>
      <h3>
        Polubisz <span className="color">też...</span>
      </h3>

      <ScrollableContainer>
        {recommendedMeals.map((meal) => (
          <ProductElement meal={meal}/>
        ))}
      </ScrollableContainer>
    </div>
  );
};
export default Recommend;
