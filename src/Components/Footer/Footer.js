import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import fb from "../../img/facebook.png";
import insta from "../../img/instagram.png";
import linkedin from "../../img/linkedIn2.png";
import github from "../../img/github.png";
const Footer = () => {
  return (
    <div className="bg-dark mt-auto">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white fw-bold">
                Bike<span className="text-warning">101</span>
              </h5>
              <p className="small text-muted">
                Our most demanding product we store for our customers. Here in
                this manufacturing we have made bike's parts and send the products in the
                worldwide. We can provide the showrooms our products by any
                times. This website basically use for everyone. Our owner
                sir{" "}
                <Link className="footer-style" to="/about">
                  Aazmi Habib
                </Link>{" "}
                also look after the website. We count our products through out
                this site.
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
            <h5 className=" text-white fw-bold">
                Bike<span className="text-warning">101</span> Features
              </h5>
              <ul className="list-unstyled ">
                <li>
                  <Link className=" footer-style  mb-0" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
            <h5 className=" text-white fw-bold"> More 
                Bike<span className="text-warning">101</span> Features
              </h5>
              <ul className="list-unstyled ">
                <li>
                  <Link className=" footer-style  mb-0" to="/manageItems">
                    Manage Items
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/addItems">
                    Add Items
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/myItems">
                    My Items
                  </Link>
                </li>
                <li>
                  <Link className=" footer-style  mb-0" to="/logIn">
                    LogIn
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3 ">Contact Us</h5>
              <ul className="text-white list-unstyled d-flex">
                <li>
                  <img className="me-2" src={fb} alt="" />
                </li>
                <li>
                  <img className="me-2" src={insta} alt="" />
                </li>
                <li>
                  <img className="me-2" src={linkedin} alt="" />
                </li>
                <li>
                  <img className="" src={github} alt="" />
                </li>
              </ul>
              <h6 className="text-white mt-5">
                Email:{" "}
                <span className="text-info">azmihabib0323@gmail.com</span>
              </h6>
              <h6 className="text-white mt-3">
                Phone:{" "}
                <span className="text-info">
                  +8801303823282, +00801765479719
                </span>
              </h6>
            </div>
          </div>
          <p className="small my-5 text-center text-muted mb-0">
            &copy; Copyrights. All rights reserved 2022 by{" "}
            <Link className="footer-style" to="/about">
              Aazmi Habib
            </Link>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
