import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footerLogo">
          <span className="footerLogoText">Hamburgownia</span>
          <span className="footerLogoDesc">
            Burgery, których smak pozostanie na długo w pamięci
          </span>
        </div>
        <div className="footerRow">
          <div className="footerCol">
            <span className="title">Contact</span>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i>
                +48 781 243 432
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                info@hamburgownia.pl
              </li>
            </ul>
          </div>
          <div className="footerCol">
            <span className="title">Bookmarks</span>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#promotions">Promocje</a>
              </li>
              <li>
                <a href="#findus">Znajdź nas</a>
              </li>
            </ul>
          </div>
          <div className="footerCol">
            <span className="title">Follow Us</span>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                  HamburgBurgers
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                  @hamburgers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
