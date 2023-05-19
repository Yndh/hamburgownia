import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Menu.css";
import { MEALS } from "../../data/data";
import NavBar from "../../components/NavBar/NavBar";
import Categories from "../../components/Menu/Categories/Categories";
import ProductElement from "../../components/ProductElement/ProductElement";
import Footer from "../../components/Footer/Footer";
import bottomWave from "../../assets/bottomWave.svg";

const Menu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);

  const [category, setCategory] = useState(1);
  
  const setCategoryHandler = (val) => {
    setCategory(val)
  }

  const filteredMeals = MEALS.filter((meal) => meal.categoryId === category);

  return (
    <div className="app">
      <NavBar />

      <div className="content__container menu__content__container">
        <div className="menu-content">
          <h2>
            Odkryj <span className="color">Menu</span>
          </h2>
          <Categories category={category} setCategory={setCategoryHandler} />

          <div className="products__container">
            {filteredMeals.map((meal) => (
              <ProductElement meal={meal}/>
            ))}
          </div>
        </div>
      </div>
      <img src={bottomWave} alt="bottomWave" className="bottomWave" />

      <Footer />
    </div>
  );
};
export default Menu;
