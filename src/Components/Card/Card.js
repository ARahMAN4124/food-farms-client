import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { productName, price, imgUrl, description } = card;
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
              <Link to="/checkout" className="btn btn-primary">
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
