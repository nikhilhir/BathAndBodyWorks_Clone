import React from "react";
import "./bottom.scss";
import { bottom } from "./data";
export default function Bottom() {
  return (
    <div className="bottom">
      <div className="policies">
        <ul>
          {bottom.map((d) => {
            return (
              <a href="google.com" key={d.link}>
                <li>{d.link}</li>
              </a>
            );
          })}
        </ul>
      </div>

      <div className="copyRight">
          <p>© 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}
