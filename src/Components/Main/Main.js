import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Main = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div className="container pt-4">
      <div className="row">
        {cart.map((card) => (
          <Card key={card._id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
