import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container restaurantStyle">
      <h3>Restaurant Orders</h3>
      <ul className="orderList">
        <Order orderType="Pizzas" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;
