import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Card = ({ card }) => {
  const { productName, price, imgUrl, description, _id } = card;
  const [logInUser, setLogInUser] = useContext(userContext);

  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="card mb-3" style={{ height: "28em" }}>
        <img
          src={imgUrl}
          className="card-img-top"
          style={{ height: "15em" }}
          alt="card-img"
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <div>
              <h3>৳{price} </h3>
            </div>
            <div>
              <Link to={`/checkout/${_id}`} className="btn btn-primary">
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
