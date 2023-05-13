import { Link } from 'react-router-dom'

import "./Menu.css";
import { MEALS } from "../../../data/data";

const Menu = () => {
  const filteredMeals = MEALS.filter((meal) => meal.categoryId === 1);

  return (
    <div className="menu">
      <span id="menu" className="link"></span>
      <h2>
        <Link to="product">
          Odkryj <span className="color">Menu</span>
        </Link>
      </h2>
      <div className="products__container">
        {filteredMeals.map((meal) => (
          <Link to={`product/${meal.title}`} className='productLink'>
            <div className="product">
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
          </Link>
        ))}
      </div>

      <button>Rozwiń Menu</button>
    </div>
  );
};
export default Menu;
