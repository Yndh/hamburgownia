import './Menu.css'
import Cheez from '../../../assets/cheezburger.png'

const Menu = () => {
    return(
        <div className="menu">
            <h2>Odkryj <span className='color'>Menu</span></h2>

            <div className="products__container">
                <div className="product">
                    <span className="price">9,99zł</span>
                    <span className="title"><span className="darkColor">Cheez</span> Burg</span>
                    <span className="desc">Soczysta wołowina, rozpuszczający się w ustach ser i świeże warzywa w chrupiącej bułce</span>

                    <img src={Cheez} alt="CheezBurg" className='productImage'/>
                </div>
                <div className="product">
                    <span className="price">9,99zł</span>
                    <span className="title"><span className="darkColor">Cheez</span> Burg</span>
                    <span className="desc">Soczysta wołowina, rozpuszczający się w ustach ser i świeże warzywa w chrupiącej bułce</span>

                    <img src={Cheez} alt="CheezBurg" className='productImage'/>
                </div>
                <div className="product">
                    <span className="price">9,99zł</span>
                    <span className="title"><span className="darkColor">Cheez</span> Burg</span>
                    <span className="desc">Soczysta wołowina, rozpuszczający się w ustach ser i świeże warzywa w chrupiącej bułce</span>

                    <img src={Cheez} alt="CheezBurg" className='productImage'/>
                </div>
            </div>
            
            <button>Rozwiń Menu</button>
        </div>
    )
}
export default Menu;