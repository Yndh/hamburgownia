import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Menu.css";
import { MEALS } from "../../data/data";
import NavBar from "../../components/NavBar/NavBar";
import Categories from "../../components/Menu/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import bottomWave from "../../assets/bottomWave.svg";

const Menu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [category, setCategory] = useState(1);
  
  const setCategoryHandler = (val) => {
    setCategory(val)
  }

  const filteredMeals = MEALS.filter((meal) => meal.categoryId === category);

  return (
    <div className="app">
      <NavBar />

      <div className="content__container">
        <h2>
          Odkryj <span className="color">Menu</span>
        </h2>
        <Categories category={category} setCategory={setCategoryHandler} />

        <div className="products__container">
          {filteredMeals.map((meal) => (
            <Link to={`../product/${meal.title}`} className="productLink">
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
      </div>
      <img src={bottomWave} alt="bottomWave" className="bottomWave" />

      <Footer />
    </div>
  );
};
export default Menu;
