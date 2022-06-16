import React from "react";
import "./mail.scss";
export default function Mail() {

  
  return (
    <div className="mail">
      <div className="mailContainer">
        <p>Get email offers & the latest news from Bath & Body Works!</p>
        <form>
          <div className="block">
            <label htmlFor="">Enter Email</label>
            <input type="email" />
          </div>

          <div className="block">
            <label htmlFor="">Confirm Email</label>
            <input type="email" />

            <input type="submit" className="submitBtn" value="SUMBIT"/>
          </div>
        </form>
      </div>
    </div>
  );
}
