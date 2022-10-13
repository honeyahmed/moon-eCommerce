import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useState ,useEffect} from "react";
const Logo = () => {
  const [isActive, setIsActive] = useState(true);
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="logo">
      <div className="hiddenMenu" onClick={toggleActive}>
        <AiOutlineMenu />
      </div>

      <div className="logo-content">
        <div
          style={{
            display: "flex",
            color: "RGB(108, 108, 108)",
            cursor: "pointer",
          }}
          className={` ${isActive ? "dropDowns" : "collapse"} `}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            Shop <MdKeyboardArrowDown style={{ marginLeft: "6px" }} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            Our World <MdKeyboardArrowDown style={{ marginLeft: "6px" }} />
          </div>
        </div>
        <div className="logoName">
          <h1>MOON</h1>
        </div>
        <div
          style={{ display: "flex" }}
          className={` ${isActive ? "navIcons" : "collapse"} `}
        >
          <FiSearch style={{ marginRight: "14px" }} />
          <HiOutlineUser style={{ marginRight: "14px" }} />
          <AiOutlineShoppingCart style={{ marginRight: "14px" }} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
