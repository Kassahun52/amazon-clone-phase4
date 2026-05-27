
import React from "react";
import { useStateValue } from "../context/StateContext";

function Cart() {
  const { state, dispatch } = useStateValue();
  const cart = state.cart;

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                padding: "20px",
                marginBottom: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", objectFit: "contain" }}
              />
              <div style={{ marginLeft: "20px", flex: 1 }}>
                <h3>{item.title}</h3>
                <p style={{ color: "#B12704" }}>${item.price}</p>
                <p>
                  {Array(item.rating).fill().map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "#f0c14b",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "right",
            }}
          >
            <h2>Total: ${getTotal()}</h2>
            <button
              style={{
                backgroundColor: "#f0c14b",
                border: "none",
                padding: "10px 30px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;