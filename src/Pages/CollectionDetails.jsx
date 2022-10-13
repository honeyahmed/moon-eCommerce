import React from "react";
import img1 from "../images/img2.jpg";
import img2 from "../images/blue.jpg";
import img3 from "../images/yellow.jpg";
import img4 from "../images/img4.jpg";

const Collection = () => {
  return (
    <div>
      <div className="collectionDetails">
        <div className="imagesDetails">
          <div className="img-collectionDetails">
            <img src={img1} alt="" />
          </div>
          <div className="img-collectionDetails">
            <img src={img2} alt="" />
          </div>
          <div className="img-collectionDetails">
            <img src={img3} alt="" />
          </div>
          <div className="img-collectionDetails">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="collectionDetails">
        <div className="imagesDetails">
          <div className="img-collectionDetails">
            <img src={img4} alt="" />
          </div>
          <div className="img-collectionDetails">
            <img src={img3} alt="" />
          </div>
          <div className="img-collectionDetails">
            <img src={img2} alt="" />
          </div>
          <div className="img-collectionDetails">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
