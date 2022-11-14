import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Blogs from "./pages/Blogs";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Skills" element={<Skills />} />
      <Route path="Blogs" element={<Blogs />} />
    </Routes>
  );
};

export default Routers;
