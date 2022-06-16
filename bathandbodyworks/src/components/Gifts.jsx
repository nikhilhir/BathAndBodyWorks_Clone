import React from "react";
import "./Gifts.css";
export const Gift = () => {
  const giftdata = [
    { title: "FEATURED", subtitle: ["Mother Day Gifts", "Gift Sets"] },
    {
      title: "GIFTS BY PRICE",
      subtitle: [
        "$15 and Under Gifts",
        "$30 and Under Gifts",
        "$50 and Under Gifts",
      ],
    },
    {
      title: "GIFTS BY RECIPIENT",
      subtitle: [
        "Gift For Her",
        "Gift For Him",
        "Gift For Everyone",
        "Gift For Hostess",
      ],
    },
    { title: "COLLECTIONS", subtitle: ["Gift Boxes And Bag", "Accessories"] },
    { title: "GIFT CARDS", subtitle: ["E-Gift Card", "Gift Card"] },
  ];
  return (
    <>
      <div className="gift-main-div">
        <div className="gift-left-div">
          <span className="sub-title">Home /</span>
          <span className="sub-title"> Gifts</span>
          {giftdata.map((e) => {
            return (
              <div className="line">
                <h5>{e.title}</h5>
                <p>
                  {e.subtitle.map((s) => (
                    <p className="sub-title">{s}</p>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
        <div className="gift-right-div">
          <div className="gift-right-text-div1">
            <p>Gift</p>
            <hr className="onlyhr" />
          </div>
          <div>
            <img
              className="gift-img"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwacddf680/images/Spring2022/xcat_gifts_0_sp1_lb.jpg?yocs=s_"
              alt=""
            />
            <img
              className="gift-img"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw049e204d/images/Spring2022/xcat_give-love-mday_sp3_lb.jpg?yocs=s_"
              alt=""
            />
          </div>
          <div className="flex-div">
            <img
              src="https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4a854cce/images/Spring2022/xcat_gifts-15_0_sp1_ls.jpg"
              alt=""
            />
            <img
              src="https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5dad3108/images/Spring2022/xcat_gifts-30_0_sp1_ls.jpg"
              alt=""
            />
            <img
              src="https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7fbd598c/images/Spring2022/xcat_gifts-50_0_sp1_ls.jpg"
              alt=""
            />
          </div>
          <img
            className="gift-img"
            src="https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4656efd7/images/Spring2022/xcat_giftcards_0_sp1_lb.jpg"
            alt=""
          />
          <div className="box-div">
            <button className="box-div-but">Shop Gift Card</button>
            <button className="box-div-but">Shop E-Gift Card</button>
          </div>
          <div>
            <p className="text-div-p">Gifts From Bath & Body Works</p>
            <p className="text-div-p1">
              Bath & Body Works is here to help you find the perfect gift for
              every occasion. Gifts for her, gifts for him—we’ve got the gifting
              goodies that will make them feel extra-special all year long. Need
              a birthday gift? Here’s a bright idea. After the cake, give your
              fragrance-loving birthday gal or guy the candles they REALLY
              want—their favorite 3-wicks! Cupid is always in our building! Take
              aim for our Valentine’s Day gifts & get most-loved fragrances for
              the special gals (“galentines”) & special guys you hold nearest &
              dearest. Looking for Mother’s Day gifts? Our DIY gift baskets &
              fragrance gift sets are a great place to start. Combine Mom’s
              favorite home fragrances with some skin-nourishing body care, and
              she’s sure to feel appreciated. Time to freshen up your annual
              Father’s Day gift! How? Trade that Father’s Day tie for Father’s
              Day fragrances. Dad has neckwear to spare—he deserves to enjoy his
              favorite scents, too! Shop gifts for men via our C.O. Bigelow or
              Bath & Body Works Men’s collections. Merry Christmas to you &
              yours! The most wonderful time of the year wouldn’t be the same
              without seasonal scents from Bath & Body Works. Stuff their
              stockings with jolly-good faves and place our best in body care &
              home fragrance next to the tree. Get more inspiration for the
              holiday in our Christmas Gift Guide. Speaking of magical holidays,
              our Easter gifts are just as festive! Fill their baskets with all
              of the above & they’ll be hopping, skipping & jumping for joy.
              Wedding gifts? Of course! Here come the bride’s favorite
              fragrances! Anniversary gifts? We’ve got those, too! Either way,
              we have housewarming scents—hint, hint, Wallflowers!—that will
              keep every house feeling like home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
