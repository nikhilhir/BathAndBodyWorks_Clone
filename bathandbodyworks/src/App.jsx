import "./App.css";
import { Homepage } from "./components/HomePage";

import {
  Routes,
  Route,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { BodyCare } from "./components/BodyCare";
import { Gift } from "./components/Gifts";
import { TopOffers } from "./components/TopOffers";
import { Bag } from "./components/Bag/Bag";
import { Shipping } from "./components/Shipping/Shipping";
import { NewNow } from "./components/NewNow/NewNow";
import Footer from "./components/Footer/Footer";
import Soap from "./components/Soaps/Soap";
import Fragrance from "./components/Fragrance/Frag";
import { Payment } from "./components/Payment/Payment";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/Signup/Signup";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
      <div className="App1">
        <div className="t" onClick={() => navigate("/")}>
          Bath & Body Works{" "}
        </div>

        <input
          className="s"
          placeholder="Search by Fragrance or product....   	"
        ></input>
        <img
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer" }}
          className="i"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc807e833/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
        ></img>
        <div className="b11">
          <BsBag
            onClick={() => navigate("/shopping-bag")}
            style={{ cursor: "pointer",fontSize:"1.25rem" }}
          />
        </div>
      </div>

      <div className="l">
        {" "}
        <Link to="/newnow" className="App2">
          NEW & NOW
        </Link>
        <Link to="/bodycare" className="App2">
          BODY CARE
        </Link>
        <Link to="/soaps" className="App2">
          HAND SOAPS & SANITIZERS
        </Link>
        <Link to="/fragrance" className="App2">
          HOME FRAGRANCE
        </Link>
        <Link to="/gifts" className="App2">
          GIFTS
        </Link>
        <Link to="/top-offers" className="App2">
          TOP OFFERS
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/bodycare" element={<BodyCare />}></Route>
        <Route path="/gifts" element={<Gift />} />
        <Route path="/top-offers" element={<TopOffers />} />
        <Route path="/shopping-bag" element={<Bag />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/newnow" element={<NewNow />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/soaps" element={<Soap />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp/>}/>
      </Routes>

      {/* {location.pathname === "/" ? <Homepage /> : ""} */}
      <Footer />
    </div>
  );
}

export default App;
