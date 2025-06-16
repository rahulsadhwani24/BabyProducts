import React, { useState } from "react";
import Logo from "/Logo.webp";

const Header = () => {
  const [menuState, setMenuState] = useState("close");

  return (
    <div className={(menuState == "open") ? `header ${menuState}` : `header`}>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav>
        <div className="burger-wrapper" onClick={() => {setMenuState((menuState == "close") ? "open" : "close")}}>
          <div className={(menuState == "open") ? `burger ${menuState}` : `burger`}>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>
        </div>
        <div className={(menuState == "open") ? `navlinks ${menuState}` : `navlinks`}>
          <a href="#fashion" onClick={() => {setMenuState((menuState == "close") ? "open" : "close")}}>Fashion</a>
          <a href="#skincare" onClick={() => {setMenuState((menuState == "close") ? "open" : "close")}}>Skincare</a>
          <a href="#oralcare" onClick={() => {setMenuState((menuState == "close") ? "open" : "close")}}>Oralcare</a>
          <a href="#footwear" onClick={() => {setMenuState((menuState == "close") ? "open" : "close")}}>FootWear</a>
          <a href="#feeding" onClick={() => {setMenuState((menuState == "close") ? "open" : "close")}}>Feeding</a>
          <a href="#toys" onClick={() => {setMenuState((menuState == "close") ? "open" : "close")}}>Toys</a>
          {/* <div className="account_cart">
            <a href="#account">Account</a>
            <a href="#cart">Cart</a>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
