import React from "react";
import Footer from "./Footer";
import Collection from "./Collection";
import Details from "./Details";
import Ads from "./Ads";
import Header from "./Header";

const Landing = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header />
      <Ads />
      <Details />
      <Collection />
      <Footer />
    </div>
  );
};

export default Landing;
