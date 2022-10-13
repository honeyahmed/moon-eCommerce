import React, { useState,useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Footer = () => {
  const [isActiveleft, setActiveleft] = useState(true);
  const [openedLeft, setOpenedLeft] = useState(true);
  const [isActiveMiddle, setActiveMiddle] = useState(true);
  const [openedMiddle, setOpenedMiddle] = useState(true);
  const [isActiveRight, setActiveRight] = useState(true);
  const [openedRight, setOpenedRight] = useState(true);
  const handleToggleleft = () => {
    setActiveleft(!isActiveleft);
  };
  const handleArrowleft = () => {
    setOpenedLeft(!openedLeft);
  };
  const handleToggleMiddle = () => {
    setActiveMiddle(!isActiveMiddle);
  };
  const handleArrowMiddle = () => {
    setOpenedMiddle(!openedMiddle);
  };
  const handleToggleRight = () => {
    setActiveRight(!isActiveRight);
  };
  const handleArrowRight = () => {
    setOpenedRight(!openedRight);
  };
  useEffect(()=>{
    function handleResize() {
      if(window.innerWidth<=800){
        setActiveMiddle(false);
        setActiveRight(false);
        setActiveleft(false)
      }
      else{
        setActiveMiddle(true);
        setActiveRight(true);
        setActiveleft(true)
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[])

  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="directions">
          <div className="left">
            <p>Customer Care</p>
            <ul className={`${isActiveleft ? "flex" : "collapse"}`}>
              <li>
                <span>Shipping & Returns</span>
              </li>
              <li>
                <span>Contact Us</span>
              </li>
              <li>
                <span>FAQ'S</span>
              </li>
              <li>
                <span>Size Guide</span>
              </li>
              <li>
                <span>Retailers</span>
              </li>
              <li>
                <span>Wholesale</span>
              </li>
              <li>
                <span>AfterPay</span>
              </li>
              <li>
                <span>Legal & Privacy</span>
              </li>
            </ul>
            <MdOutlineKeyboardArrowDown
              className="arrowIcon"
              onClick={() => {
                handleArrowleft();
                handleToggleleft();
              }}
              style={{
                transform: openedLeft ? "rotate(180deg)" : "",
                transition: "all 0.2s ease-in",
              }}
            />
          </div>

          <div className="middle">
            <p> Our World</p>
            <ul className={`${isActiveMiddle ? "flex" : "collapse"}`}>
              <li>
                <span>About Us</span>
              </li>
              <li>
                <span>Ethics & Sustainability</span>
              </li>
              <li>
                <span>Giving Back</span>
              </li>
            </ul>
            <MdOutlineKeyboardArrowDown
              className="arrowIcon"
              onClick={() => {
                handleArrowMiddle();
                handleToggleMiddle();
              }}
              style={{
                transform: openedMiddle ? "rotate(180deg)" : "",
                transition: "all 0.2s ease-in",
              }}
            />
          </div>

          <div className="right">
            <p>Follow</p>
            <ul className={`${isActiveRight ? "flex" : "collapse"}`}>
              <li>
                <span>Instagram</span>
              </li>
              <li>
                <span>Facebook</span>
              </li>
              <li>
                <span>Newsletter</span>
              </li>
            </ul>
            <MdOutlineKeyboardArrowDown
              className="arrowIcon"
              onClick={() => {
                handleArrowRight();
                handleToggleRight();
              }}
              style={{
                transform: openedRight ? "rotate(180deg)" : "",
                transition: "all 0.2s ease-in",
              }}
            />{" "}
          </div>
        </div>
        <div className="contact">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
