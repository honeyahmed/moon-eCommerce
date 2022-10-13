import React, { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isFav, setIsFav] = useState(true);
  const [isFav1, setIsFav1] = useState(true);
  const handleFav = () => {
    setIsFav(!isFav);
  };
  const handleFav1 = () => {
    setIsFav1(!isFav1);
  };
  return (
    <div className="headerImages">
      <div className="img first">
        <div className="firstOverlay">
          {isFav ? (
            <MdOutlineFavoriteBorder
              className="iconOverlay"
              onClick={handleFav}
            />
          ) : (
            <MdFavorite className="iconOverlay" onClick={handleFav} />
          )}
          <BsCart className="iconOverlay" />
          <NavLink to="productdetails" style={{color:'white',marginTop:'7px',padding:'0px'}}>
              <BsEmojiHeartEyes className="iconOverlay" />
          </NavLink>
        </div>
      </div>
      <div className="img second">
        <div className="secondOverlay">
          {isFav1 ? (
            <MdOutlineFavoriteBorder
              className="iconOverlay"
              onClick={handleFav1}
            />
          ) : (
            <MdFavorite className="iconOverlay" onClick={handleFav1} />
          )}{" "}
          <BsCart className="iconOverlay" />
          <BsEmojiHeartEyes className="iconOverlay" />
        </div>
      </div>
    </div>
  );
};

export default Header;
