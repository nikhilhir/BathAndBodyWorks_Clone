import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Carousel } from "../Carousel/Carousel";
import "./Bag.css";

export const Bag = () => {
  const bagItems = useSelector((store) => store.products);
  const navigate = useNavigate();
  return (
    <>
      {/* {console.log(bagItems)} */}
      <div className="bag-main-div">
        <p className="bag-main-div-p">Shopping Bag</p>
        <hr className="bag-main-div-hr" />

        <div className="bag-flex-div">
          <h4>WAIT! LET US RECOMMEND</h4>
          <Carousel />
        </div>

        <div className="bag-but-div">
          <div className="bag-but-div-text">ITEMS IN SHOPPING BAG</div>
          <div>
            <button className="bag-but1">
              <img
                className="bag-but-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVjU8IwGHm0L8t2_wp_fH-Fj-t9OGmo0VrDEsi-Kk_isNyChYZAkH6xxknWdTAqkpnw&usqp=CAU"
                alt=""
              />
            </button>
            <button
              className="bag-check-but"
              onClick={() => navigate("/shipping")}
            >
              CHECKOUT
            </button>
          </div>
        </div>

        <div className="bag-background-div1">
          <h5>
            Need it ASAP? Choose Pick Up In Store, and we'll typically have it
            ready for pickup within 4 hours.
          </h5>
        </div>

        <div className="bag-background-div2">
          <h4>YOUR SHIPPING AND PICKUP CHOICES</h4>
        </div>

        <div className="bag-table-div">
          <table className="bag-table">
            <thead>
              <tr>
                <th style={{ width: "35%", textAlign: "left" }}>ITEM</th>
                <th style={{ width: "12%" }}>PRICE</th>
                <th style={{ width: "15%" }}>QTY</th>
                <th style={{ width: "35%" }}>TOTAL PRICE</th>
              </tr>
            </thead>

            {/* <tr>
              <td>{"img"}</td>
              <td>{200}</td>
              <td>{1}</td>
              <td>{200}</td>
            </tr> */}
            <tbody>
              {bagItems.map((el) => (
                <tr>
                  <td>
                    <img className="table-image" src={el.image} alt="" />
                    <p>{el.title}</p>
                  </td>
                  <td>${el.price}0</td>
                  <td>{1}</td>
                  <td>${el.price}0</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
        </div>
        <button className="update-bag" onClick={() => navigate("/bodycare")}>
          UPDATE BAG
        </button>
        <hr />
        <div className="bag-coupan-div">
          <div className="bag-promotion-div">
            <h3>PROMOTION CODE</h3>
            <p>Only one code can be applied per order.</p>
            <input className="bag-input-box" type="text" />{" "}
            <button className="bag-input-but">APPLY</button>
          </div>
          <div className="bag-clculation-div">
            <div className="bag-calculation-flex-div">
              <div>
                <p>MERCHANDISE SUBTOTAL</p>
                <p>ESTIMATED SHIPPING & HANDLING - Standard</p>
                <p>SALES TAX</p>
                <p>
                  Tax is estimated and will be calculated when your order is
                  processed.
                </p>
                <h3>ORDER TOTAL (USD)</h3>
              </div>

              <div>
                <p>$6.99</p>
                <p>$15.50</p>
                <p>$15.50</p>
                <br />
                <h3>$24.74</h3>
              </div>
            </div>
            <hr />
            <div className="gift-box-but">
              <button className="bag-but1 paypel-but">
                <img
                  className="bag-but-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVjU8IwGHm0L8t2_wp_fH-Fj-t9OGmo0VrDEsi-Kk_isNyChYZAkH6xxknWdTAqkpnw&usqp=CAU"
                  alt=""
                />
              </button>
              <button
                className="bag-check-but checkout-but"
                onClick={() => navigate("/shipping")}
              >
                CHECKOUT
              </button>
            </div>
            <p className="bag-calculation-flex-text-div">
              International Shoppers
            </p>
            <p className="bag-calculation-flex-text-div">
              All prices are displayed and processed in US dollars (USD).
            </p>
          </div>
        </div>
        <div className="bag-flex-div">
          <h4>WAIT! LET US RECOMMEND</h4>
          <Carousel />
        </div>
      </div>
    </>
  );
};
