import { useParams, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

import './Product.css'
import NavBar from '../../components/NavBar/NavBar';
import ProductHero from '../../components/Product/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Recommend from '../../components/Product/Recommend/Recommend';
import bottomWave from '../../assets/bottomWave.svg'
import { MEALS } from '../../data/data';
import { type } from '@testing-library/user-event/dist/type';

const Product = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const { id } = useParams();
    const mealId = parseInt(id);

    const filteredMeals = MEALS.filter((meal) => meal.id === mealId)[0];
    console.log(filteredMeals);
    console.log('==========');

    return (
      <div className="app">
        <NavBar />
        <div className="productElContainer">
          <ProductHero filteredMeals={filteredMeals} />
          <Recommend categoryId={filteredMeals.categoryId} mealId={filteredMeals.id}/>
        </div>
        <img src={bottomWave} alt="bottomWave" className="bottomWave" />

        <Footer/>
      </div>
    );
}
export default Product;