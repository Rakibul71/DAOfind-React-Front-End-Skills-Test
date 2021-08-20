import React from "react";
import "./resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <div className="top">
        <h3>Resources</h3>
        <button>New</button>
      </div>
      <div className="item">
        <div className="itemLeft">
          <h3>Gamefied DAOs</h3>
          <p>NFTs</p>
        </div>
        <p>LOgo</p>
      </div>

      {/* add another */}
      <div className="item">
        <div className="itemLeft">
          <h3>History of DAOs</h3>
          <p>Biz-Dev</p>
        </div>
        <p>LOgo</p>
      </div>

      {/* add another */}
      <div className="item">
        <div className="itemLeft">
          <h3>Boilerplate Code</h3>
          <p>Development</p>
        </div>
        <p>LOgo</p>
      </div>
    </div>
  );
};

export default Resources;
