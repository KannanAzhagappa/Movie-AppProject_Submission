import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);
  var scrollfn = function () {};

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll", scrollfn());
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.psdstamps.com/wp-content/uploads/2020/01/movies-stamp-png.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Dummy User"
      />
    </div>
  );
}

export default Nav;
