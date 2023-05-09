import './Hero.css'

import cheez from '../../../assets/cheezburger.png'

const Hero = () => {
    return(
        <div className="hero">
            <h1>Burgerownia z Charakterem</h1>
            <span className="heroDesc">Nasze burgery to połączenie lokalnych składników i kreatywnych receptur, które ożywią Twoje podniebienie!</span>
            <a href="#menu"><button>Zobacz Menu</button></a>

            <img src={cheez} alt="CheezBurger" className='heroCheez'/>
        </div>
    )
}
export default Hero;