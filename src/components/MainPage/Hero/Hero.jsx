import { Link } from 'react-router-dom'

import './Hero.css'
import cheez from '../../../assets/cheezburger.png'

const Hero = () => {
    return(
        <div className="hero">
            <h1>Burgerownia z Charakterem</h1>
            <span className="heroDesc">Nasze burgery to połączenie lokalnych składników i kreatywnych receptur, które ożywią Twoje podniebienie!</span>
            <Link to="product"><button>Zobacz Menu</button></Link>

            <img src={cheez} alt="CheezBurger" className='heroCheez'/>
        </div>
    )
}
export default Hero;