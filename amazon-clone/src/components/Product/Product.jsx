import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

function Product({ id, title, price, image, rating, category }) {
  const navigate = useNavigate();

  return (
    <div className="product">
      <div className="product__info">
        <p onClick={() => navigate(`/product/${id}`)}
           style={{ cursor: "pointer", fontWeight: "bold" }}>
          {title}
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <img
        onClick={() => navigate(`/products/${category}`)}
        src={image}
        alt={title}
        style={{ cursor: "pointer" }}
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;