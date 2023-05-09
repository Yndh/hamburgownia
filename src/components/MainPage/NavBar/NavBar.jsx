import './NavBar.css'
import logo from '../../../assets/logo.svg'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo}/>
                <p>Hamburgownia</p>
            </div>

            <ol>
                <li><a href="#menu"><p>Menu</p></a></li>
                <li><a href="#promotions"><p>Promocje</p></a></li>
                <li><a href="#findus"><p>Znajdź nas</p></a></li>
            </ol>
        </div>
    )
}
export default NavBar