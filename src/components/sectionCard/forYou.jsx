import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import { forYou } from "../../api/cardApi";
import "./card.scss";

const ForYou = () => {
  return (
    <div>
      <div className="for-you">
        <h1>our selection for you</h1>
        <div className="cards-first">
          {forYou.map((item, idx) => {
            return (
              <div className="card">
                <div className="top-icons">
                  <p>{item.skidka}</p>
                  <ShoppingCartIcon className="icon" />
                </div>
                <div className="imgbox">
                  <img src={item.img} alt="ss" />
                </div>
                <div className="title">
                  <h4>{item.title}</h4>
                </div>
                <div className="stars">
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <div className="coment">
                    <CommentIcon className="coment-icon" />
                    <p>{item.review}</p>
                  </div>
                </div>
                <div className="number-cost">
                  <h6>{item.sum1}</h6>

                  <h3>{item.sum2}</h3>
                  <h2>{item.sum3}</h2>
                  <h5>{item.sum4}</h5>
                </div>
                <div className="btns">
                  <button className="btn-green">installment plan</button>
                  <button className="btn-blue">buy in 1 click</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForYou;
