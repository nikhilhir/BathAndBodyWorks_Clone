import "./TopOffers.css";
export const TopOffers = () => {
  const offerdata = [
    {
      avatar:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw573cbc3b/images/Spring2022/obc_tbctier_sp3_ss.jpg?yocs=o_s_",
      text: " All Full Size Body Care (including  Aromotheropy)",
      btext: "Buy 3, Get 3 FREE",
    },
    {
      avatar:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw96126717/images/Spring2022/diff_mday_sp3_ss.jpg?yocs=o_s_",
      text: "wallflower Fragerns Refills",
      btext: "5/$18 or 7/$24",
    },
    {
      avatar:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw55bfb0b6/images/Spring2022/sp_garden-infusion_sp3_ss.jpg?yocs=o_s_",
      text: "Hand Soap",
      btext: "6/$27 or 4/$20",
    },
    {
      avatar:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw36bcc92f/images/Spring2022/cndl_sw_sp3_ss.jpg?yocs=o_s_",
      text: "Single Wick Candless",
      btext: "5/$18 or 7/$24",
    },
    {
      avatar:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw12b687f4/images/Spring2022/sn_pocketbac_sp3_ss.jpg?yocs=o_s_",
      text: "Hand Sanitizer 5-Pack",
      btext: "$8",
    },
    {
      avatar:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf18e10fe/images/Spring2022/obc_travel_sp3_ss.jpg?yocs=o_s_",
      text: "Travel Hand And Leep Care",
      btext: "Bay 2 Get 1 FREE",
    },
  ];
  return (
    <>
      <span className="offer-span">Home /</span>
      <span> Top Offer</span>
      <div className="Top-offer-div">
        <div className="Top-offer-text-div">
          <h1>TOP OFFERS</h1>
          <p className="Top-offer-div-p">
            Too good to pass up! Shop our best offers now.
          </p>
        </div>
        <hr className="Top-offer-hr" />
        <div>
          <img
            className="topoffer-img"
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb69c9c2e/images/Spring2022/oo-pwp_sp3_sb_lto.jpg?yocs=o_s_"
            alt="img"
          />
        </div>

        <div className="topoffer-div">
          {offerdata.map((e) => {
            return (
              <div className="topoffer-data-div">
                <img className="topoffer-data-div-img" src={e.avatar} alt="" />
                <p className="offer-box-div-p">{e.text}</p>
                <p className="offer-box-div-p1">{e.btext}</p>
                <button className="offer-box-div-but">SHOP</button>
              </div>
            );
          })}
        </div>
        <hr className="Top-offer-hr" />
        <div>
          <p className="top-offer-bottom-text">
            About Top Offers from Bath & Body Works
          </p>

          <p className="offer-bottom-text-p">
            Welcome to the one-stop-shop for all Bath & Body Works coupons. This
            is the spot to watch for the latest deals, coupon codes, hottest
            steals and the most need-right-now promotions we’ve got going on.
            From home fragrance favorites to body care loves, we definitely have
            something amazing for whatever mood (or season) you’re feeling.
          </p>
          <p className="offer-bottom-text-p">
            And while you’re here, let’s talk about a few things that we’re
            totally obsessed with right now. After all, a Bath & Body Works
            promotion is the best time to try something new, right? We’re super
            excited about our new body care collections (they’re basically joy
            in a bottle), and our latest candle and Wallflowers arrivals turn
            your home into a fragrance paradise. Trust us: with Bath & Body
            Works coupons, you actually can have it all!
          </p>

          <p className="offer-bottom-text-p">
            Another way we love using Bath & Body Works coupon codes? On gifts,
            of course! Check your calendar: if you have any birthdays or
            holidays on the horizon, this would be the perfect time to stock up
            on someone’s (or your) favorite fragrance. You could even score a
            few extra hand soaps or single wick candles to keep in your gift
            closet for the next celebration. (Incredible gifting strategy, go
            you!) And if you have a few common questions, let’s answer them
            here…
          </p>
          <h3 className="offer-bottom-text-p">
            How do you get Bath & Body Works coupons mailed to you?
          </h3>
          <p className="offer-bottom-text-p">
            Just fill out our Mailing Address Update email form. Choose "Add me
            to your mailing list" as your Request Type and provide all relevant
            information. Then you should be good to go!
          </p>

          <h3 className="offer-bottom-text-p">
            Does Bath & Body Works offer free shipping?
          </h3>

          <p className="offer-bottom-text-p">
            Sometimes! Sign up for emails to stay in the know – it’s that easy.
            Don’t forget you can also see our best deals on this page.
          </p>

          <h3 className="offer-bottom-text-p">
            How many promo codes can you redeem per online order?
          </h3>

          <p className="offer-bottom-text-p">
            Just one! Keep in mind that a lot of offers and promotions don’t
            require a promo code, so you can still add one in that case. If more
            than one code is entered at checkout, the only code that will be
            applied is the last promo code entered.
          </p>

          <h3 className="offer-bottom-text-p">
            What is the Bath & Body Works return policy?
          </h3>
          <p className="offer-bottom-text-p">
            We just want you to love it! Return anything, anytime for any
            reason. 100% guaranteed. Learn more about our happiness guarantee.
          </p>

          <p className="offer-bottom-text-p">
            We’re always updating this page with the latest and greatest Bath &
            Body Works sales, so bookmark it now and check back often. Other
            coupon sites can wait – this is the spot to check for the best
            deals. Hint, hint: now that you’ve seen our greatest deals shop our
            newest arrivals.
          </p>
        </div>
      </div>
    </>
  );
};
