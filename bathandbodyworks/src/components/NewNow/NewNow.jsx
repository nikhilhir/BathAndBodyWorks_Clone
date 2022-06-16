import { Link } from "react-router-dom";
import "./NewNow.css";

export const NewNow = () =>{
    return(
        <div>
            <div className="now-header">
                <Link to="/Home">HOME  </Link> /  NEW & NOW
            </div>
            <div className="now-main">
                <div className="left-section">
                    <h4>NEW & NOW</h4>
                    <ul class="left-category" >
                        <li>New Arrivals</li>
                        <li>Men's Shop</li>
                        <li>Laundry Fragrances</li>
                        <li>Best Sellers</li>
                        <li>Aromatherapy Shop</li>
                        <li>Get Inspired</li>
                        <li>Shop by Fragnances</li>
                    </ul>
                </div>
                <div class="right-section">
                    <h1>New Fragrances & Body Care Products</h1>
                    <div className="section">
                        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0e0852dd/images/Spring2022/xcat_newnow-lp_0_sp1_lb.jpg?yocs=s_" alt="" />
                    </div>
                    <div className="section">
                        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc0939637/images/Spring2022/xcat_garden-infusion_sp3_lb.jpg?yocs=s_" alt="" />
                    </div>
                    <div className="section">
                        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc0939637/images/Spring2022/xcat_garden-infusion_sp3_lb.jpg?yocs=s_" alt="" />
                    </div>
                    <div className="section">
                        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7f23b34f/images/Spring2022/xcat_mday-new-now_sp3_lb.jpg?yocs=s_" alt="" />
                    </div>
                    <div className="section">
                        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw58d8e77e/images/Spring2022/xcat_new-laundry_0_sp1_lb.jpg?yocs=s_" alt="" />
                    </div>
                    <div className="section">
                        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwddf2b85f/images/Spring2022/xcat_mens-shop-hhih_sp3_lb.jpg?yocs=s_" alt="" />
                    </div>
                    <div className="now-info">
                        <div className="info-container">
                            <h2>New & Now From Bath & Body Works</h2>
                            <p>Get excited…this is your gateway to everything newly released and completely on-trend. And we
                                <i> mean </i>
                                everything — from new products and fragrances to seasonal scents and never-before-seen goodies.
                            </p>
                            <p>
                            While you’re getting ready to start shopping, hop by this page and peek at the body care products, home essentials and new fragrances we’ve just launched. You could find anything. Scents you’ve never tried before. A brand-new bath product that calls to you. Candles that perfectly match the vibe you’re going for in your home. Recently released collections everyone’s obsessed with. Basically…anything and everything you could want (or even things you didn’t know you wanted!).
                            </p>
                            <p>
                            So, sit back, relax and explore—this is a page that deserves a nice, long scroll. We hope you find lots of things to love and hey, maybe you’ll find the perfect gift for a family member or bestie at the same time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
