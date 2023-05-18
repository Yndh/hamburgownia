import './Categories.css'

const Categories = (props) => {
    return (
      <div className="categories__container">
        <div
          className={`icon ${props.category === 1 ? "active" : ""}`}
          onClick={() => {
            props.setCategory(1);
          }}
        >
          <i className="fa-solid fa-burger"></i>
          <span className="cat-title">Hamburgi</span>
        </div>

        <div
          className={`icon ${props.category === 2 ? "active" : ""}`}
          onClick={() => {
            props.setCategory(2);
          }}
        >
          <i className="fa-solid fa-percent"></i>
          <span className="cat-title">Oferty</span>
        </div>

        <div
          className={`icon ${props.category === 3 ? "active" : ""}`}
          onClick={() => {
            props.setCategory(3);
          }}
        >
          <i className="fa-solid fa-glass-water"></i>
          <span className="cat-title">Napoje</span>
        </div>

        <div
          className={`icon ${props.category === 4 ? "active" : ""}`}
          onClick={() => {
            props.setCategory(4);
          }}
        >
          <i className="fa-solid fa-utensils"></i>
          <span className="cat-title">Inne</span>
        </div>
      </div>
    );
}   
export default Categories