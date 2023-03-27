import React from "react";
import DDimg from "../../../images/daily_discount_img.png";
import { Link } from "react-router-dom";
import "./home-page.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <div className="daily_discount">
          <h1 className="daily_discount_text">Recommended</h1>
          <div className="daily_discount_image">
            <Link to={"/hp-victus"}>
              <img draggable={false} src={DDimg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
