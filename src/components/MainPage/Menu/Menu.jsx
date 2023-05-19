import { Link } from 'react-router-dom'
import { useState } from 'react';

import "./Menu.css";
import { MEALS } from "../../../data/data";
import ProductElement from '../../ProductElement/ProductElement';

const Menu = () => {
  const [menuExpand, setMenuExpand] = useState(false)

  const filteredMeals = MEALS.filter((meal) => meal.categoryId === 1);
  const mealsToShow = menuExpand ? filteredMeals : filteredMeals.slice(0, 2);

  return (
    <div className="menu">
      <span id="menu" className="link"></span>
      <h2>
        <Link to="menu">
          Odkryj <span className="color">Menu</span>
        </Link>
      </h2>
      <div className="products__container">
        {mealsToShow.map((meal) => (
          <ProductElement meal={meal} />
        ))}
      </div>

      <Link to={menuExpand ? "/menu" : ''} className='buttonLink'>
        <button
          onClick={() => {
            setMenuExpand(!menuExpand);
          }}
        >
          {menuExpand ? "Zobacz Całe Menu" : "Rozwiń Menu"}
        </button>
      </Link>
    </div>
  );
};
export default Menu;
