import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import "./shipping.css";
import { addressData } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

export const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.products);
  
  const [formdata, setFormdata] = useState({
    address: "",
    city: "",
    first_name: "",
    last_name: "",
    mobile: "",
    state: "",
    zipcode: "",
  });

  const handelchange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    dispatch(addressData(formdata));
    navigate("/payment")
  };
  return (
    <>
      {console.log(cartItems)}
      <div className="shipping-main-div">
        <div className="shipping-left-div">
          <p className="shipping-p-div">SHIPPING ADDRESS</p>
          <form className="shipping-form-div" onSubmit={handelsubmit}>
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span>First Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="shipping-input-box"
              name="first_name"
              onChange={handelchange}
            />
            <br />
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span>Last Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="shipping-input-box"
              name="last_name"
              onChange={handelchange}
            />
            <br />
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span>Address 1
            </label>{" "}
            <br />
            <input
              type="text"
              className="shipping-input-box"
              name="address"
              onChange={handelchange}
            />
            <br />
            <label className="shipping-label-div">Address 2</label> <br />
            <input type="text" className="shipping-input-box" />
            <br />
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span>Country
            </label>{" "}
            <br />
            <select
              className="shipping-select-tag"
              name="country"
              onChange={handelchange}
            >
              <option value="India">India</option>
              <option value="United State">United State</option>
            </select>
            <br />
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span>City
            </label>{" "}
            <br />
            <input
              type="text"
              className="shipping-input-box"
              name="city"
              onChange={handelchange}
            />
            <br />
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span>State
            </label>{" "}
            <br />
            <select
              className="shipping-select-tag"
              name="state"
              onChange={handelchange}
            >
              <option value="">Select...</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Utter Pradesh">Utter Pradesh</option>
              <option value="Panjab">Panjab</option>
              <option value="Madha Pradesh">Madha Pradesh</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Chennai">Chennai</option>
              <option value="Rajstan">Rajstan</option>
              <option value="Dehli">Dehli</option>
            </select>
            <br />
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span> ZIP Code
            </label>{" "}
            <br />
            <input
              type="number"
              className="shipping-input-box"
              name="zipcode"
              onChange={handelchange}
            />
            <br />
            <label className="shipping-label-div">
              <span className="shipping-span-div">*</span>Phone
            </label>{" "}
            <br />
            <input
              type="text"
              className="shipping-input-box"
              name="mobile"
              onChange={handelchange}
            />
            <br />
            <input
              className="shipping-button"
              type="submit"
              value="CONFORM SHIPPING ADDRESS"
            />
          </form>
        </div>
        <div className="shipping-right-div">
          <div>YOUR ORDER</div>
          <hr />
          <div className="shipping-flexdiv">
            <div className="shipping-left-flexdiv">
              {cartItems.map((el) => (
                <img className="shipping-img-div" src={el.image} alt="" />
              ))}
            </div>
            <div className="shipping-right-flexdiv">
              {cartItems.map((el) => (
                <p style={{ lineHeight: 3.3 }}>{el.title}</p>
              ))}
            </div>
          </div>
          <hr />
          <div className="shipping-bottom-flexdiv">
            <div className="shipping-bottom-left-flexdiv">
              <p>MERCHANDISE SUBTOTAL</p>
              <p>ESTIMATED SHIPPING </p>
              <p>SALES TAX</p>
              <h3>ORDER TOTAL (USD)</h3>
            </div>
            <div className="shipping-bottom-right-flexdiv">
              <p>$31.00</p>
              <p>$31.00</p>
              <p>$31.00</p>
              <h3>$31.00</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
