import './Hero.css'

const ProductHero = (props) => {
    return (
      <div className="productEl">
        <img
          src={props.filteredMeals.imageUrl}
          alt={props.filteredMeals.title}
          className="productImg"
        />

        <h2>
          {props.filteredMeals.title.split(" ").map((word, index) => {
            if (index == 0) {
              return <span className="darkColor">{word}</span>;
            } else {
              return word;
            }
          })}
        </h2>
        <p className="desc">{props.filteredMeals.description}</p>
        <button>{props.filteredMeals.price} ZŁ</button>
      </div>
    );
}
export default ProductHero;