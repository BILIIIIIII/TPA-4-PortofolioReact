import React from "react";
import { Link } from "react-router-dom";

const Home_BlurCenter = () => {
  return (
    <div class="center">
      <h5>let me introduce</h5>
      <a href="#sec1">
        <h1 id="c-h1">MY PORTOFOLIO.</h1>
      </a>
      <Link to="/About">
        <button id="btn-sec1">Get in touch</button>
      </Link>
    </div>
  );
};

export default Home_BlurCenter;
