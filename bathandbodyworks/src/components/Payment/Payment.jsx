import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
export const Payment = () => {
  const udata = useSelector((store) => store.userAddress);
  const navigate = useNavigate();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Your Are Offiline");
      return;
    }
    var options = {
      key: "rzp_test_LCdjMrzlhIQNh8", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
      currency: "USD",
      name: "Payment Page",
      description: "Ecommerce",
      image: "image",
      // "order_id": "order_9A33XWu170gUtm",//This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
      handler: function (response) {
        alert("Order Placed Sucsessfully");
        //navigate to home page
        navigate("/");
      },
      prefill: {
        name: udata.first_name + udata.last_name,
        email: `${udata.first_name+udata.last_name}@mail.com`,
        contact: udata.mobile,
      },

      theme: {
        color: "#EA5B29",
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <div className="payment-main-div">
        <div className="payment-add-div">
          <div>
            <h3>SHIPPING</h3>
            <h4>SHIPPING ADDRESS</h4>
            <p>
              {udata.first_name} {udata.last_name}
            </p>
            <p>{udata.address}</p>
            <p>
              {udata.city} {udata.state} {udata.zipcode}
            </p>
            <p>{udata.mobile}</p>
          </div>
        </div>
        <div className="payment-cal-div">
          <h3 className="payment-cal-h3-div">PAYMENT</h3>
          <h4>ORDER DETAILS</h4>
          <p>Prices are inclusive of all taxes</p>

          <div className="payment-cal-flexdiv">
            <div>
              <p>Total MRP</p>
              <p>Shipping charges</p>
              <h3>ORDER TOTAL</h3>
            </div>
            <div>
              <p>₹2512</p>
              <p>₹0.00</p>
              <h3>₹2,498.00</h3>
            </div>
          </div>
          <hr className="payment-cal-hr" />

          <button className="payment-cal-but" onClick={displayRazorpay}>
            PROCEED WITH PAYMENT
          </button>
        </div>
      </div>
    </>
  );
};
