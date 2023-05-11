import './Promotions.css'
import CheezTaw from '../../../assets/cheeztaw.png'

const Promotions = () => {
    return (
      <div className="promotions">
        <span id="promotions" className="link"></span>
        <h2>
          Gorąca <span className="color">Oferta</span>
        </h2>

        <div className="promotions__container">
          <div className="promotionsCol">
            <img src={CheezTaw} alt="CheezTaw" className="productImage" />
            <span className="price">19,99zł</span>
          </div>
          <div className="promotionsCol">
            <h2>
              <span className="darkColor">Cheez</span>Taw
            </h2>
            <span className="title">
              <span className="darkColor">Cheez</span>Burger,
            </span>
            <span className="title">
              <span>Frytki & Napój</span>
            </span>

            <span className="desc">
              Próbowałeś już Cheez burga, ale czy zawsze musisz decydować się na
              jedną rzecz? CheezTaw to idealna opcja dla Ciebie! Ciesz się
              soczystym Cheezburgiem, chrupiącymi frytkami i orzeźwiającym
              napojem - wszystko to w jednym wyjątkowym zestawie, który zaspokoi
              Twoje głodne podniebienie!
            </span>
          </div>
        </div>
      </div>
    );
}
export default Promotions;