import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(orders + 1);
  }

  return (
    <li className="restaurantList">
      {props.orderType}: {orders}
      <RestaurantButton orderFunctionProp={orderOne} />
    </li>
  );
};

export default Order;
