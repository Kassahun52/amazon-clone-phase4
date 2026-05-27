import React from "react";
import { useParams } from "react-router-dom";

function Category() {
  const { category } = useParams();

  return (
    <div className="category">
      <h1>Category: {category}</h1>
      <p>Showing products in {category} category.</p>
    </div>
  );
}

export default Category;