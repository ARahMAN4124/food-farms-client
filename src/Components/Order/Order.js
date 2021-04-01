import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Header from "../Header/Header";
import orderGif from "../../images/tenor.gif";
import { Link } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [logInUser, setLogInUser] = useContext(userContext);

  useEffect(() => {
    fetch(
      "https://cherry-cobbler-14506.herokuapp.com/orderList?email=" +
        logInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <>
      <div className="text-dark">
        <Header></Header>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12">
            <img
              src={orderGif}
              className="rounded"
              style={{ height: "450px" }}
              alt="gif"
            />
          </div>
          <div className="col-lg-7 col-md-8 col-sm-12">
            <h2>Your Order List</h2>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr>
                      <th>{order.productName}</th>
                      <td>{order.productPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link to="/" className="btn btn-outline-danger">
                  Continue To Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
