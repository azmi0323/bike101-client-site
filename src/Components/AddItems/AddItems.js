import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import addproduct from '../../img/login.png'

const AddItems = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [minOrderQuantity, setminOrderQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation need

    // make product for post product
    const postProduct = {
      name,
      img,
      body,
      price,
      quantity,
      minOrderQuantity,
      email: user.email,
    };

    axios
      .post("/products", postProduct)
      .then((res) => {
        toast("add items successful");
      })
      .catch((error) => console.log(error));

    setName("");
    setImg("");
    setBody("");
    setPrice("");
    setQuantity("");
    setminOrderQuantity("");
  };

  return (
    <div className=" container mx-auto">
      <div className="row">
        <div className="col-lg-8 justify-content-center align-items-center d-flex">
          <img className="img-fluid " src={addproduct} alt="" />
        </div>
        <div className="col-lg-4 my-5 px-5 py-3 form-container">
          <form onSubmit={handleSubmit} className=" mx-auto">
            <h3 className="text-center text-success fw-bold pt-4">
              Please Add New Items
            </h3>
            <label htmlFor="name" className="mt-3 text-success fw-bold">
              Product Name:{" "}
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="w-100 input-field"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label
              htmlFor="productDetails"
              className="mt-3 text-success fw-bold"
            >
              Product Details:{" "}
            </label>
            <br />
            <input
              type="text"
              name="body"
              className="w-100 input-field"
              id="body"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <br />
            <label htmlFor="productPrice" className="mt-3 text-success fw-bold">
              Product Price:{" "}
            </label>
            <br />
            <input
              type="number"
              name="price"
              className="w-100 input-field"
              id="price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <label htmlFor="imgURL" className="mt-3 text-success fw-bold">
              Image URL:{" "}
            </label>
            <br />
            <input
              type="text"
              name="img"
              id="img"
              className="w-100 input-field"
              required
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <br />
            <label
              htmlFor="productQuantity"
              className="mt-3 text-success fw-bold"
            >
              Product Quantity:{" "}
            </label>
            <br />
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="w-100 input-field"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br />
            <label
              htmlFor="productQuantity"
              className="mt-3 text-success fw-bold"
            >
              Minimum Order Quantity:{" "}
            </label>
            <br />
            <input
              type="name"
              name="minOrderQuantity"
              className="w-100 input-field"
              required
              value={minOrderQuantity}
              onChange={(e) => setminOrderQuantity(e.target.value)}
            />
            <br />
            

            <button
              type="submit"
              className="mt-3 d-block mx-auto glow-on-hover"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
