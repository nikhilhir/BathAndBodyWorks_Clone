import React from "react";
import "./midsoap.scss";
import { topOffers, featured, handSoap, sanitizer, gift, soapProduct} from "./soapData";
import Aboutsoap from "./Aboutsoap";

export default function Midsoap() {
  return (
    <div className="midSoap">
      <div className="leftSoap">
        <div>
          <p>TOP OFFERS</p>
          <ul>
            {topOffers.map((d) => {
              return (
                <a href="google.com">
                  <li>{d.link}</li>
                </a>
              );
            })}
          </ul>
        </div>

        <div>
          <p>FEATURED</p>
          <ul>
            {featured.map((d) => {
              return (
                <a href="google.com">
                  <li>{d.link}</li>
                </a>
              );
            })}
          </ul>
        </div>

        <div>
          <p>HAND SOAPS</p>
          <ul>
            {handSoap.map((d) => {
              return (
                <a href="google.com">
                  <li>{d.link}</li>
                </a>
              );
            })}
          </ul>
        </div>

        <div>
          <p>HAND SANITIZERS</p>
          <ul>
            {sanitizer.map((d) => {
              return (
                <a href="google.com">
                  <li>{d.link}</li>
                </a>
              );
            })}
          </ul>
        </div>

        <div>
          <p>GIFT STES</p>
          <ul>
            {gift.map((d) => {
              return (
                <a href="google.com">
                  <li>{d.link}</li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="rightSoap">
        <div className="topSoap">
          <p>Hand Soaps & Sanitizers</p>
          <div className="hline"></div>
        </div>

        <div>
          <a href="https://www.bathandbodyworks.com/c/hand-soaps-sanitizers/gentle-and-clean-soaps">
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw300d16be/images/Spring2022/sp_hhq_0_sp1_lb.jpg?yocs=s_"
            alt=""
          />
          </a>
        </div>
        
        <div className="shopCategory">
          <p>
            <div></div>
            SHOP BY CATEGORY
            <div></div>
          </p>
        </div>

        <div className="soapProduct">
          {soapProduct.map((d) => {
            return (
              <div className="proSoap">
                <div>
                  <a href="https://www.bathandbodyworks.com/c/home-fragrance/all-candles">
                    <img src={d.img} alt="" />
                  </a>

                  <button>{d.title}</button>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <a href="https://www.bathandbodyworks.com/c/hand-soaps-sanitizers/gentle-and-clean-soaps">
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5be7ba21/images/Spring2022/sp_core_0_sp1_lb.jpg?yocs=s_"
            alt=""
          />
          </a>
        </div>

        <Aboutsoap />
      </div>
    </div>
  );
}
