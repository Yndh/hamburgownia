import './App.css';

import NavBar from './components/MainPage/NavBar/NavBar';
import Hero from './components/MainPage/Hero/Hero';
import Menu from './components/MainPage/Menu/Menu';
import Promotions from './components/MainPage/Promotions/Promotions';
import Slider from './components/MainPage/Slider/Slider';
import FindUs from './components/MainPage/FindUs/FindUs';
import OpenHours from './components/MainPage/OpenHours/OpenHours';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Hero/>

      <div className='content__container'>
          <Menu/>
          <Promotions/>
          <Slider/>
          <FindUs/>
          <OpenHours/>
      </div>
    </div>
  );
}

export default App;
