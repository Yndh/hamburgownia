import { Link } from 'react-router-dom'

import './NavBar.css'
import logo from '../../assets/logo.svg'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo}/>
                <p>Hamburgownia</p>
            </div>

            <ol>
                <li><Link to="/#menu"><p>Menu</p></Link></li>
                <li><Link to="/#promotions"><p>Promocje</p></Link></li>
                <li><Link to="/#findus"><p>Znajdź nas</p></Link></li>
            </ol>
        </div>
    )
}
export default NavBar