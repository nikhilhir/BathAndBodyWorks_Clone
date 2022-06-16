import React from "react";
import "./mid.scss";
import { Facebook, Twitter, Instagram, YouTube, Pinterest } from "@mui/icons-material";
export default function Mid() {
  return (
    <div className="mid">
      <div className="socialWrapper">
        <div className="socials">
          <div>
            <p>GET CONNECTED</p>
          </div>

          <div className="socialIcons">
            <Facebook className="icons"/>
            <Twitter className="icons"/>
            <Instagram className="icons"/>
            <YouTube className="icons"/>
            <Pinterest className="icons"/>
          </div>
        </div>

        <div className="img">
          <a href="google.com">
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
