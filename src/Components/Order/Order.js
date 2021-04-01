import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Header from "../Header/Header";
import ordergif from "../../images/tenor.gif";

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
          <div className="col-5">
            <img
              src={ordergif}
              className="rounded"
              style={{ height: "450px" }}
              alt="gif"
            />
          </div>
          <div className="col-7">
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
        </div>
      </div>
    </>
  );
};

export default Order;
