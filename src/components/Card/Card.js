import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import logo from "../../images/logo.svg";
import List from "../List/List";
import Product from "../Product/Product";
import "./Card.css";

const Card = () => {
  const [products, setProdutcs] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProdutcs(data));
  }, []);

  const handleAddToList = (product) => {
    const newList = [...list, product];
    setList(newList);
    Swal.fire("added", "the duration is added successfully", "success");
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="gym-name">
          <img src={logo} alt="logo" className="logo"></img>
          <h1>USA GYM</h1>
        </div>
        <div className="product-container">
          {/* dynamically rendering all the cards */}
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToList={handleAddToList}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <List list={list}></List>
      </div>
    </div>
  );
};

export default Card;
