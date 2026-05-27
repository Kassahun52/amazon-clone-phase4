import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="1"
            title="Apple AirPods Pro"
            price={249.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SX679_.jpg"
            rating={5}
            category="electronics"
          />
          <Product
            id="2"
            title="Samsung 4K Smart TV"
            price={599.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71pwaNeHmaL._AC_SX679_.jpg"
            rating={4}
            category="electronics"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Nike Running Shoes"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81eeOpBMZpL._AC_UX695_.jpg"
            rating={4}
            category="clothing"
          />
          <Product
            id="4"
            title="Coffee Maker"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81o39MTBRXL._AC_SX679_.jpg"
            rating={3}
            category="kitchen"
          />
          <Product
            id="5"
            title="Laptop Stand"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SX679_.jpg"
            rating={5}
            category="electronics"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;