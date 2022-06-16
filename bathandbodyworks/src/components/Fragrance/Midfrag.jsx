import React from "react";
import "./midfrag.scss";
import { topOffers, featured, handSoap, sanitizer, product } from "./soapData";
import Aboutfrag from "./Aboutfrag";

export default function MidFrag() {
  return (
    <div className="midFrag">
      <div className="leftFrag">
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
          <p>CANDLES</p>
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
          <p>AIR FRESHENERS</p>
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
      </div>
      <div className="rightFrag">
        <div className="topFrag">
          <p>Home Fragrance</p>
          <div className="hline"></div>
        </div>

        <div>
          <a href="https://www.bathandbodyworks.com/c/hand-soaps-sanitizers/gentle-and-clean-soaps">
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw63538dd8/images/Spring2022/xcat_homefrag_0_sp1_lb.jpg?yocs=s_"
              alt=""
            />
          </a>
        </div>

        <div className="shopCat">
          <p>
            <div></div>
            SHOP BY CATEGORY
            <div></div>
          </p>
        </div>

        <div className="fragProduct">
          {product.map((d) => {
            return (
              <div className="pro">
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
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2297f3fb/images/Spring2022/xcat_oasis-preview-home_sp3_lb.jpg?yocs=s_"
              alt=""
            />
          </a>
        </div>

        <Aboutfrag />
      </div>
    </div>
  );
}
