import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orderList")
      .then((res) => res.json())
      .then((data) => {
        // const ordersList = { ...orders, ...data };
        setOrders(data);
      });
  }, []);

  return (
    <>
      <div className="text-dark">
        <Header></Header>
      </div>
      <div className="container mt-4">
        <h2>Your Order List</h2>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr>
                  <th>{order.productName}</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
