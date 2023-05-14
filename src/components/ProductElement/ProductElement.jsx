import { Link } from 'react-router-dom'

import './ProductElement.css'

const ProductElement = (props) => {
    return (
      <Link to={`../product/${props.meal.title}`} className="productElement">
        <span className="price">{props.meal.price} zł</span>
        <span className="title">
          {props.meal.title.split(" ").map((word, index) => {
            if (index == 0) {
              return <span className="darkColor">{word}</span>;
            } else {
              return word;
            }
          })}
        </span>
        <span className="desc">{props.meal.description}</span>

        <img src={props.meal.imageUrl} alt={props.meal.title} className="productImage" />
      </Link>
    );
}
export default ProductElement;