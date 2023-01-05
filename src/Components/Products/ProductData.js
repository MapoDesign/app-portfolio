import "./ProductCard.css";

const ProductData = (props) => {
  return (
    <div class="card bg-dark text-white">
      <img
        className="card-img"
        src={props.drink.strDrinkThumb}
        alt=""
        height="200"
        width="200"
      />

      <div class="card-img-overlay">
        <h5 class="card-title">{props.drink.strDrink}</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  );
};

export default ProductData;
