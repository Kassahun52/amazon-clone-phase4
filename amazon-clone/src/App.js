import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CarouselComponent from "./components/Carousel/Carousel";
import Home from "./components/Home/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <CarouselComponent />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
        <Route
          path="/products/:category"
          element={
            <>
              <Header />
              <Category />
            </>
          }
        />
        <Route
  path="/product/:id"
  element={
    <>
      <Header />
      <ProductDetail />
    </>
  }
     />
      </Routes>
    </BrowserRouter>
  );
}

export default App;