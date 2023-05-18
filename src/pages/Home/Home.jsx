import { useEffect } from 'react';

import bottomWave from '../../assets/bottomWave.svg'
import NavBar from '../../components/NavBar/NavBar';
import Hero from '../../components/MainPage/Hero/Hero';
import Menu from '../../components/MainPage/Menu/Menu';
import Promotions from '../../components/MainPage/Promotions/Promotions';
import Slider from '../../components/MainPage/Slider/Slider';
import FindUs from '../../components/MainPage/FindUs/FindUs';
import OpenHours from '../../components/MainPage/OpenHours/OpenHours';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  return (
    <div className="app">
      <NavBar />
      <Hero />

      <div className="content__container" id="menu">
        <Menu id="menu" />
        <Promotions />
        <Slider />
        <FindUs />
        <OpenHours />
      </div>
      <img src={bottomWave} alt="bottomWave" className="bottomWave" />

      <Footer />
    </div>
  );
};
export default Home