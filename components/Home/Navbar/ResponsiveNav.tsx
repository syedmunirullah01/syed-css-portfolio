"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";
// import "./ResponsiveNav.css"; // Optional: if you have specific styles for this component

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="responsive-nav">
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
