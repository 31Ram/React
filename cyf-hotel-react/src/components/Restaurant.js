import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="last-element">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Hot dog" startFrom={32} increment={3}/>
        <Order orderType="Salads" startFrom={10} increment={7}/>
        <Order orderType="Chocolate cake" startFrom={3} increment={2}/>
      
      </ul>
    </div>
  );
};

export default Restaurant;
