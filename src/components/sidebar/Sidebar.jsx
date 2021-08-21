import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="fas fa-home"></i>
              <p>Leaderbord</p>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-columns"></i>
              <p>Dashboard</p>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-users"></i>
              <p>People</p>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-book-open"></i>
              <p>Learn</p>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-cart-plus"></i>
              <p>Sponsor</p>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-dollar-sign"></i>
              <p>Earn</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
