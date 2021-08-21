import React from "react";
import "./topbar.css";
import img1 from "../../images/favicon-daofind.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="LogoPart">
        <img className="logoImage" src={img1} alt="" />
        <h1>
          DAO <span className="span">Find</span>
        </h1>
      </div>
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Search DAOs " />
      <div className="wallet">
        <i class="fas fa-wallet"></i>
        <p>Connect wallet</p>
      </div>
    </div>
  );
};

export default Topbar;
