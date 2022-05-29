import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signup from "../../img/signup.png";
import auth from "../../firebase.init";
import { Spinner } from "react-bootstrap";
import axios from "axios";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, emailUser, emailLoading, error2] =
    useCreateUserWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (emailUser) {
      axios.post("/login", { email: emailUser.user.email }).then((res) => {
        localStorage.setItem("token", res.data.token);
        axios.put("/user", {
          // name: emailUser.user.displayName,
          email: emailUser.user.email,
        }).then(res=>console.log(res.data))
      });
      navigate(from, { replace: true });
      
    }
  }, [emailUser, from, navigate]);
  useEffect(() => {
    if (error2) {
      console.log(error2);
    }
  }, [error2]);
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password did not Match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  if (emailLoading) {
    return (
      <div className="spinner_">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div className="row container mx-auto">
      <div className="col-lg-8">
        <img className="img-fluid mt-2" src={signup} alt="" />
      </div>
      <div className="col-lg-4 my-5 px-5 py-3 form-container">
        <div className="  my-4">
          <form onSubmit={handleCreateUser} className=" mx-auto">
            <h3 className="text-center text-success fw-bold pt-4">
              Please Sign up
            </h3>
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Email:
            </label>
            <input
              onBlur={handleEmailBlur}
              className="w-100 input-field"
              type="text"
              name=""
              id=""
              required
            />
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Password:
            </label>
            <input
              onBlur={handlePasswordBlur}
              className="w-100 input-field"
              type="password"
              required
              name=""
              id=""
            />
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Confirm Password:
            </label>
            <input
              onBlur={handleConfirmPasswordBlur}
              className="w-100 input-field"
              type="password"
              required
              name=""
              id=""
            />
            <p className="text-danger">{error}</p>
            <p className="text-info mt-3">
              Already have an Account?
              <span>
                <Link
                  className=" text-black rounded px-2 ms-2 fw-bold my-2"
                  to="/logIn"
                >
                  Please Log In
                </Link>
              </span>
            </p>

            <input
              className="input-btn d-block mx-auto mt-3"
              type="submit"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
