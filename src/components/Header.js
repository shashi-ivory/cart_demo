import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const results = useSelector((state) => state.cartData);
  console.warn("redux data in resulda", results);
  return (
    <div className="header">
      <div className="cart-div">
        <span
          style={{
            position: "absolute",
            zIndex: 5,
            // background: "red",
            top: 2,
            left: 20,
          }}
        >
          {results.length}
        </span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          style={{ height: 50, width: 50, marginTop: 10 }}
          alt="cart-img"
        />
      </div>
    </div>
  );
};

export default Header;
