import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Card = ({ card }) => {
  const { productName, price, imgUrl, description, _id } = card;
  const [logInUser, setLogInUser] = useContext(userContext);
  const handleBuyNow = (id) => {
    const buyProduct = { ...logInUser };
    buyProduct.productId = id;
    setLogInUser(buyProduct);
    // const url = `http://localhost:5000/checkout/${id}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {

    //     // buyProduct.productName = data[0].productName;

    //     // buyProduct.productprice = data[0].price;

    //   });
  };
  return (
    <div className="col-3">
      <div className="card mb-3" style={{ height: "28em" }}>
        <img
          src={imgUrl}
          className="card-img-top"
          style={{ height: "15em" }}
          alt="card-img"
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <div>
              <h3>৳{price} </h3>
            </div>
            <div>
              <Link
                to="/checkout"
                onClick={() => handleBuyNow(_id)}
                className="btn btn-primary"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
