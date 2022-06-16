import { Link } from "react-router-dom";
import "./BodyCare.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { Products } from "./Products";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/action";

export const BodyCare = () => {
  const [data, setData] = useState({ Products });
  const dispatch = useDispatch();

  return (
    <div>
      <p className="small-text">
        <Link to="/">HOME </Link> / BODY CARE
      </p>
      <div className="BodyCare-div">
        <div className="table">
          <p className="dark-text small-text">TOP OFFERS</p>
          <p className="small-text">
            Buy 3, Get 3 Free All Full-Size Body Care
          </p>
          <p className="small-text">
            Buy 2, Get 1 Free Travel, Hand & Lip Care
          </p>
          <br />
          <p className="dark-text small-text">FEATURED</p>
          <p className="small-text">New Body Care</p>
          <p className="small-text">Retired Fragrances</p>
          <p className="small-text">Travel Size</p>
          <br />
          <p className="dark-text small-text">BATH & SHOWER</p>
          <p className="small-text">All Bath & Shower</p>
          <p className="small-text">Body Wash & Shower Gel</p>
          <p className="small-text">Bubble Bath</p>
          <p className="small-text">Bar Soap</p>
          <p className="small-text">Bath Accessories</p>
          <br />

          <p className="dark-text small-text">MOISTURIZERS</p>
          <p className="small-text">All Moisturizers</p>
          <p className="small-text">Body Lotion</p>
          <p className="small-text">Body Cream</p>
          <p className="small-text">Hand Cream</p>
          <p className="small-text">Lip Gloss & Balms</p>
          <br />

          <p className="dark-text small-text">FRAGRANCE</p>
          <p className="small-text">All Fragrance</p>
          <p className="small-text">Body Sprays & Mists</p>
          <p className="small-text">Perfume & Cologne</p>

          <br />

          <p className="dark-text small-text">AROMATHERAPY</p>
          <p className="small-text">All Aromatherapy</p>
          <p className="small-text">Body Wash & Shower Gel</p>
          <p className="small-text">Moisturizers</p>
          <p className="small-text">Mists & Sprays</p>

          <br />

          <p className="dark-text small-text">MEN'S</p>
          <p className="small-text">All Men's</p>
          <p className="small-text">Body Wash & Shower Gel</p>
          <p className="small-text">Moisturizers</p>
          <p className="small-text">Body Spray & Cologne</p>

          <br />

          <p className="dark-text small-text">GIFT SETS</p>
          <p className="set-text">Body Care Gift Sets</p>
        </div>

        <div className="body">
          <div className="product-heading-div">
            <p className="product-heading-text myBlue">All Body Care</p>
            <p>.</p>
          </div>
          <hr />
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0817b914/images/Spring2022/tbctier_sp3_gh.jpg?yocs=s_"
            alt=""
          />
          <div className="black-buttons-div">
            <button className="black-button">ALL BODY CARE</button>
            <button className="black-button">FRAGRANCE</button>
            <button className="black-button">BATH & SHOWER</button>
            <button className="black-button">MOISTURIZER</button>
            <button className="black-button">AROMATHERAPY</button>
          </div>
          <div className="black-buttons-div">
            <button className="black-button">MEN'S</button>
          </div>
          <div className="sorting-options">
            <p>Sort By: </p>
            <select name="" id="">
              <option value=""></option>
              <option value="">price low to high</option>
              <option value="">price high to low</option>
              <option value="">title A-Z</option>
              <option value="">fragrance </option>
              <option value="">type</option>
            </select>
          </div>
          <hr className="gray-line" />
          <div className="location-div">
            <MdOutlineLocationOn />
            <i className="blue">SHOP YOUR STORE</i>
            <a href="/">Set Store</a>
          </div>
          <hr className="gray-line" />

          <div className="products-div">
            {data.Products.map((el, i) => (
              <div className="single-product-div">
                <img className="product-image" src={`${el.image}`} alt="" />
                <p>
                  <i className="blue-text">{el.fragrance_type}</i>
                </p>
                <b>{el.title}</b>
                <p className="small-text">{el.subtitle}</p>
                <br />
                <b>${el.price}0</b>
                <p className="small-text red-text" style={{ lineHeight: 1 }}>
                  {el.offers}
                </p>

                <button
                  className="product-button small-text"
                  onClick={() =>
                    dispatch(addProduct(el)) && alert("Added to cart")
                  }
                >
                  ADD TO BAG
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
