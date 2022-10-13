import React from "react";
import { GiFlowerTwirl,GiSpotedFlower } from "react-icons/gi";
import {FaShippingFast} from 'react-icons/fa';
import {BsCreditCard2Back} from 'react-icons/bs'

const Details = () => {
  return (
    <div className="details">
      <div className="detail">
        <GiFlowerTwirl className="detail-icon"/>
        <p>Be apart of something bigger</p>
      </div>
      <div className="detail">
        <GiSpotedFlower className="detail-icon" />
        <p>Sustainable materials and packaging</p>
      </div>
      <div className="detail">
        <FaShippingFast className="detail-icon" />
        <p>Free and fast delivery nationwide</p>
      </div>
      <div className="detail">
        <BsCreditCard2Back className="detail-icon" />
        <p>Buy now and pay later </p>
      </div>

    </div>
  );
};

export default Details;
