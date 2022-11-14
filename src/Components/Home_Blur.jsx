import React from "react";
import Home_BlurBottom from "./Home_BlurBottom";
import Home_BlurCenter from "./Home_BlurCenter";
import Home_BlurTop from "./Home_BlurTop";

const Home_Blur = () => {
  return (
    <div id="blur">
      <Home_BlurTop />
      <Home_BlurCenter />
      <Home_BlurBottom />
    </div>
  );
};

export default Home_Blur;
