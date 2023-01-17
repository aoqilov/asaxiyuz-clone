import React, { useState } from "react";
import Books from "./books";
import { asideApi } from "../../api/asideApi";

const Book = () => {
  const [asideapi, setAsideapi] = useState(asideApi);

  return (
    <div>
      <div className="book">
        <div className="title">
          <h5>Books</h5>
          <img
            src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png"
            alt="logo"
          />
        </div>
        {asideapi.map((item, idx) => {
          return (
            <Books
              key={idx}
              img={item.img}
              title={item.title}
              libar={item.librar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Book;
