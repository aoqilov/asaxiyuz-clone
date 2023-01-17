import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import "../aside/aside.scss";

const Phone = () => {
  return (
    <div>
      <div className="for-you">
        <h1 style={{ marginTop: "25px" }}>popular</h1>
        <div className="cards-first">
          <div className="card" style={{ width: "290px" }}>
            <div className="top-icons">
              <p>best</p>
              <ShoppingCartIcon className="icon" />
            </div>
            <div className="imgbox">
              <img
                src="https://assets.asaxiy.uz/product/main_image/desktop//6325aa1ecd141.png.webp"
                alt="ss"
              />
            </div>
            <div className="title">
              <h4>Smartphone iPhone 14 Pro 128GB Deep</h4>
            </div>
            <div className="stars">
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <div className="coment">
                <CommentIcon className="coment-icon" />
                <p>0 reviews</p>
              </div>
            </div>
            <div className="number-cost">
              <h6></h6>

              <h3>15 399 000 sum</h3>
              <h2>1 768 900 sum / 12 months</h2>
              <h5> 958 500 sum / 12 months</h5>
            </div>
            <div className="btns">
              <button className="btn-green" style={{ padding: "16px 25px" }}>
                installment plan
              </button>
              <button className="btn-blue" style={{ padding: "16px 25px" }}>
                buy in 1 click
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://miro.medium.com/max/720/1*ibN0ptxrg6LkZ5DZbKv2YA.png"
          alt=""
          style={{
            width: "95%",
            borderRadius: "10px",
            margin: "45px 0 0 0",
            boxShadow: " 2px 2px 5px gray",
          }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MmmP2Nuccrax5mJe8ObMYc9ngM3vD5KHKQ&usqp=CAU"
          alt=""
          style={{
            width: "95%",
            margin: "45px 0 0 0px",
            borderRadius: "10px",
            boxShadow: " 2px 2px 5px gray",
          }}
        />
      </div>
    </div>
  );
};

export default Phone;
