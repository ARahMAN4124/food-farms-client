import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [productImg, setProductImg] = useState(null);

  const onSubmit = (data) => {
    const addProduct = {
      productName: data.productname,
      price: data.Price,
      description: data.description,
      imgUrl: productImg,
    };

    console.log(addProduct);

    const url = `http://localhost:5000/addProduct`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    }).then((response) => console.log(response));
  };

  const handleImgUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "de72c60033d44091a0d2c4e2010d3736");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setProductImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h3>Add events</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="col form-group">
            <label>Event Title</label>
            <input
              type="text"
              className="form-control"
              name="productname"
              defaultValue=" "
              ref={register}
            />
          </div>
          <div className="col form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              min="1"
              step="any"
              name="Price"
              defaultValue=" "
              ref={register}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              defaultValue=" "
              rows="3"
              ref={register}
            ></textarea>
          </div>
          <div className="col form-group">
            <label>Banner</label>
            <input
              type="file"
              name="productImg"
              onChange={handleImgUpload}
              className="form-control-file btn btn-outline-primary"
              ref={register}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
