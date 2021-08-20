import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <h1>DAO FIND Logo</h1>
      <input type="text" placeholder="Search DAOs " />
      <h1>Connect wallet</h1>
    </div>
  );
};

export default Topbar;
