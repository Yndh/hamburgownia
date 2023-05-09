import './App.css';

import NavBar from './components/MainPage/NavBar/NavBar';
import Hero from './components/MainPage/Hero/Hero';
import Menu from './components/MainPage/Menu/Menu';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Hero/>

      <div className='content__container'>
          <Menu/>
      </div>
    </div>
  );
}

export default App;
