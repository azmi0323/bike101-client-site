import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Details = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { _id, name, price, quantity:maxQuantity, minOrderQuantity, email } = products;

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [id, loading]);

  const confirmOrder = (e) => {
    e.preventDefault();
    const { email, phone, userName, address, quantity } =
      e.target;
      
    if (parseInt(quantity.value) > parseInt(maxQuantity) || parseInt(quantity.value) < parseInt(minOrderQuantity)) {
      toast.error(
        `quantity value must be greater than ${parseInt(minOrderQuantity)} & smaller than ${parseInt(maxQuantity)}`,
        { theme: "colored" }
      );
    } else {
      const newOrder = {
        
        productName: name,
        email: email.value,
        number: phone.value,
        userName: userName.value,
        address: address.value,
        quantity: quantity.value,
      };
      axios.post('/orders',newOrder)
      .then(res=>toast.success(
        `Order confirm`,
        { theme: "colored" }
      ))
      
    }
  };

  const handleReview = (event) => {
    event.preventDefault();

    const addReview = {
      userName: event.target.name.value,
      email: event.target.email.value,
      productName: event.target.productName.value,
      review: event.target.review.value,
    };
    axios.post("/reviews", addReview).then((res) => toast.success(
      `New Review Added`,
      { theme: "colored" }
    ));
    console.log(addReview);
  };

  if (loading) {
    return (
      <div className="spinner_">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-7">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 p-0 p-lg-4">
                  <img
                    src={products?.img}
                    className="img-fluid rounded-start mx-auto mt-2 text-center d-block"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <h6 className="card-title">Price : {products.price}</h6>
                    <p className="card-text">Details : {products.body}</p>
                    <p className="card-text">Quantity : {products.quantity}</p>
                    <p className="card-text">
                      Minimum Order Quantity : {products.minOrderQuantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-5 container py-3 mx-auto form-container">
              <div className="">
                <form className=" mx-auto" onSubmit={confirmOrder}>
                  <h3 className="text-center text-success fw-bold pt-4">
                    Purchase Order
                  </h3>
                  <label className="mt-3 text-success fw-bold" htmlFor="email">
                    Product Name
                  </label>
                  <input
                    className="w-100 input-field"
                    type="text"
                    name="productName"
                    disabled
                    value={products?.name}
                    id=""
                    required
                  />
                  <label className="mt-3 text-success fw-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-100 input-field"
                    type="email"
                    name="email"
                    value={user?.email}
                    disabled
                    id=""
                    required
                  />
                  <label className="mt-3 text-success fw-bold" htmlFor="email">
                    User Name
                  </label>
                  <input
                    className="w-100 input-field"
                    type="text"
                    name="userName"
                   
                    
                    id=""
                    required
                  />
                  <label className="mt-3 text-success fw-bold" htmlFor="email">
                    Price
                  </label>
                  <input
                    className="w-100 input-field"
                    type="number"
                    name="price"
                    value={products.price}
                    id=""
                    required
                  />
                  <label className="mt-3 text-success fw-bold" htmlFor="email">
                    Minimum Order Quantity
                  </label>
                  <input
                    className="w-100 input-field"
                    type="number"
                    name="quantity"
                    defaultValue={products.minOrderQuantity}
                    id=""
                    required
                  />
                  <label className="mt-3 text-success fw-bold" htmlFor="email">
                    Phone Number
                  </label>
                  <input
                    className="w-100 input-field"
                    type="number"
                    name="phone"
                    id=""
                    required
                  />
                  <label
                    className="mt-3 text-success fw-bold"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="w-100 input-field"
                    type="text"
                    name="address"
                    id=""
                    required
                  />
                  <input
                    className=" input-btn d-block mx-auto mt-3"
                    type="submit"
                    value="Confirm Order"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2>Add a Review</h2>
            <form onSubmit={handleReview}>
              <label className="mt-3 text-success fw-bold" htmlFor="email">
                User Name
              </label>
              <input
                className="w-100 input-field"
                type="text"
                name="name"
                id=""
                required
              />
              <label className="mt-3 text-success fw-bold" htmlFor="email">
                Product Name
              </label>
              <input
                className="w-100 input-field"
                type="text"
                name="productName"
                readOnly
                value={products?.name}
                id=""
                required
              />
              <label className="mt-3 text-success fw-bold" htmlFor="email">
                Email
              </label>
              <input
                className="w-100 input-field"
                type="text"
                name="email"
                readOnly
                value={products.email}
                id=""
                required
              />
              <label className="mt-3 text-success fw-bold" htmlFor="email">
                Review
              </label>
              <textarea
                className="w-100 input-field"
                rows="5"
                name="review"
                id=""
                required
              />
              <input
                className=" input-btn d-block mx-auto mt-3"
                type="submit"
                value="Add a Review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
