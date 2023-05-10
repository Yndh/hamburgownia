import './Menu.css'
import Cheez from '../../../assets/cheezburger.png'
import Bacon from '../../../assets/baconburg.png'
import Winged from '../../../assets/wingedburg.png'

const Menu = () => {
    return (
      <div className="menu">
        <h2 id='menu'>
          Odkryj <span className="color">Menu</span>
        </h2>

        <div className="products__container">
          <div className="product">
            <span className="price">9,99zł</span>
            <span className="title">
              <span className="darkColor">Cheez</span> Burg
            </span>
            <span className="desc">
              Soczysta wołowina, rozpuszczający się w ustach ser i świeże
              warzywa w chrupiącej bułce
            </span>

            <img src={Cheez} alt="CheezBurg" className="productImage" />
          </div>
          <div className="product">
            <span className="price">9,99zł</span>
            <span className="title">
              <span className="darkColor">Bacon</span> Burg
            </span>
            <span className="desc">
              Pikantny smak chrupiącej bekonowej wędliny na soczystej wołowinie
            </span>

            <img src={Bacon} alt="BaconBurg" className="productImage" />
          </div>
          <div className="product">
            <span className="price">9,99zł</span>
            <span className="title">
              <span className="darkColor">Winged</span> Burg
            </span>
            <span className="desc">
              Zdrowa i soczysta pierś z kurczaka, chrupiąca sałata i świeże
              Ogórki w pysznej bułce burgerowej
            </span>

            <img src={Winged} alt="WingedBurg" className="productImage" />
          </div>
        </div>

        <button>Rozwiń Menu</button>
      </div>
    );
}
export default Menu;