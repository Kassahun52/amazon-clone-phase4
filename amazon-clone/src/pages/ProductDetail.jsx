// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const products = [
//   {
//     id: "1",
//     title: "Apple AirPods Pro",
//     price: 249.99,
//     image: "https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SX679_.jpg",
//     rating: 5,
//     description: "Active Noise Cancellation, Transparency mode, Spatial Audio.",
//   },
//   {
//     id: "2",
//     title: "Samsung 4K Smart TV",
//     price: 599.99,
//     image: "https://images-na.ssl-images-amazon.com/images/I/71pwaNeHmaL._AC_SX679_.jpg",
//     rating: 4,
//     description: "Crystal UHD 4K Smart TV with Alexa built-in.",
//   },
//   {
//     id: "3",
//     title: "Nike Running Shoes",
//     price: 89.99,
//     image: "https://images-na.ssl-images-amazon.com/images/I/81eeOpBMZpL._AC_UX695_.jpg",
//     rating: 4,
//     description: "Lightweight and comfortable running shoes.",
//   },
// ];

// function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return <h1>Product not found!</h1>;
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//       <h1>{product.title}</h1>
//       <img src={product.image} alt={product.title} style={{ width: "300px" }} />
//       <p><strong>Price:</strong> ${product.price}</p>
//       <p><strong>Description:</strong> {product.description}</p>
//       <p>
//         {Array(product.rating).fill().map((_, i) => <span key={i}>⭐</span>)}
//       </p>
//       <button onClick={() => navigate("/")}>← Back to Home</button>
//     </div>
//   );
// }

// export default ProductDetail;



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateContext";

const products = [
  {
    id: "1",
    title: "Apple AirPods Pro",
    price: 249.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SX679_.jpg",
    rating: 5,
    description: "Active Noise Cancellation, Transparency mode, Spatial Audio.",
  },
  {
    id: "2",
    title: "Samsung 4K Smart TV",
    price: 599.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/71pwaNeHmaL._AC_SX679_.jpg",
    rating: 4,
    description: "Crystal UHD 4K Smart TV with Alexa built-in.",
  },
  {
    id: "3",
    title: "Nike Running Shoes",
    price: 89.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/81eeOpBMZpL._AC_UX695_.jpg",
    rating: 4,
    description: "Lightweight and comfortable running shoes.",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  const cart = state.cart;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const found = products.find((p) => p.id === id);
      setProduct(found);
      setLoading(false);
    }, 1000);
  }, [id]);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: product,
    });
    navigate("/cart");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
      maxWidth: "800px",
      margin: "auto",
      backgroundColor: "white",
      marginTop: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ marginBottom: "20px" }}>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", objectFit: "contain", marginBottom: "20px" }}
      />
      <p style={{ fontSize: "24px", color: "#B12704", marginBottom: "10px" }}>
        <strong>${product.price}</strong>
      </p>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "10px" }}>
        {product.description}
      </p>
      <p style={{ marginBottom: "20px" }}>
        {Array(product.rating).fill().map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </p>
      <button
        onClick={addToCart}
        style={{
          backgroundColor: "#f0c14b",
          border: "none",
          padding: "10px 30px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "10px",
          width: "100%"
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#e8e8e8",
          border: "none",
          padding: "10px 30px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          width: "100%"
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
}

export default ProductDetail;