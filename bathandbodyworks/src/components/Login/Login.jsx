import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../Redux/action";

export const Login = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = () => {
    axios
      .get("http://still-badlands-85906.herokuapp.com/users")
      .then((res) =>
        res.data.map((el) =>
          el.email === formData.email && el.password === formData.password
            ? dispatch(authUser(true)) && alert("Login Success")
            : ""
        )
      )
      .then(() => (auth == false ? alert("Invalid credentials") : ""));
  };

  if (auth) return <Navigate to="/" />;

  return (
    <div className="Login-component-main-div">
      <hr className="gray-line" />
      <p className="small-text" style={{ marginLeft: "1%" }}>
        <Link to="/">HOME</Link> / SIGNUP OR LOGIN
      </p>

      <div className="Signin-main-div">
        <img
          className="Login-image"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"
          alt=""
        />
        <br />
        <p className="product-heading-text myBlue">Sign In or Sign up</p>
        <hr />
        <div className="left-right-parts">
          <div className="Sign-in-left">
            <p>SIGN IN</p>
            <p className="small-text">
              If you already have an account with us, sign in below
            </p>
            <p>Email Address</p>
            <input type="text" name="email" onChange={handleChange} />
            <br />
            <p>Password</p>
            <input type="password" name="password" onChange={handleChange} />
            <div className="display-flex">
              <u>Forgot Password</u>
              <div>
                <input type="checkbox" />
                Remember me
              </div>
            </div>
            <p className="small-text center">Privacy Policy</p>
            <button className="product-button" onClick={handleSignIn}>
              SIGN IN
            </button>
          </div>

          <div className="Sign-up-right">
            <p>SIGN UP</p>
            <p className="small-text">
              Create an account to access the best of your favourite store
            </p>
            <img
              className="Sign-up-image"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_"
              alt=""
            />
            <button className="product-button"
            onClick={() =>navigate("/register")}>CREATE AN ACCOUNT</button>
          </div>
        </div>
        <div className="questions">
          <p>QUESTIONS ?</p>

          <p>We're here for you! Call us at 1-800-756-5005</p>
        </div>
      </div>
    </div>
  );
};
