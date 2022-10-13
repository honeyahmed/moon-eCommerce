import React, { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import CollectionDetails from "./CollectionDetails";
import Footer from "./Footer";

const ProductDetails = () => {
  const [isFav, setIsFav] = useState(true);
  const handleFav = () => {
    setIsFav(!isFav);
  };
  return (
    <div>
      <div className="headerImages productDetails">
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
            <AiOutlineSearch className="iconOverlay" />
          </div>
        </div>
        <div className="descContainer">
          <div className="desc">
            <h2>Blue Perfect Winter Shirt </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              reprehenderit iste perspiciatis temporibus rerum non explicabo
              impedit sapiente asperiores ullam labore, molestiae obcaecati
              quisquam quasi placeat facilis quos deserunt? Dolores?Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Ratione alias quam
              dolores!
            </p>
            <div className="rating">
              <div>
                <AiFillStar style={{ color: "#FFA534" }} />
                <AiFillStar style={{ color: "#FFA534" }} />
                <AiFillStar style={{ color: "#FFA534" }} />
                <AiFillStar style={{ color: "#FFA534" }} />
                <AiOutlineStar />
              </div>
              <div className="priceContainer">
                <p className="price">
                  <span>$</span>200.00
                </p>
                <div>
                  <MdOutlineFavoriteBorder className="priceIcon" />
                  <BsCart className="priceIcon" />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "auto" }}>
              <h2>Similar Products </h2>
              <div style={{ width: "100%" }}>
                <CollectionDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default ProductDetails;
