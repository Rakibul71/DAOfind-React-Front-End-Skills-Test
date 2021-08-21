import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarFontawesome">
        <i className="fas fa-home"></i>
        <p>Leaderbord</p>
      </div>
      <div className="sidebarFontawesome">
        <i className="fas fa-columns"></i>
        <p>Dashboard</p>
      </div>
      <div className="sidebarFontawesome">
        <i className="fas fa-users"></i>
        <p>People</p>
      </div>
      <div className="sidebarFontawesome">
        <i className="fas fa-book-open"></i>
        <p>Learn</p>
      </div>
      <div className="sidebarFontawesome">
        <i className="fas fa-cart-plus"></i>
        <p>Sponsor</p>
      </div>
      <div className="sidebarFontawesome">
        <i className="fas fa-dollar-sign"></i>
        <p>Earn</p>
      </div>
    </div>
  );
};

export default Sidebar;
