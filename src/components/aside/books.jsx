import React from "react";

const Books = ({ img, title, libar }) => {
  return (
    <div>
      <div className="info-book">
        <img src={img} alt="as" />
        <div className="name-book">
          <p className="h5">{title}</p>
          <p>{libar}</p>
        </div>
      </div>
    </div>
  );
};

export default Books;
