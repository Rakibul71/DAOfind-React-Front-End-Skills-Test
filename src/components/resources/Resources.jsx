import React from "react";
import "./resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <div className="top">
        <h5>Resources</h5>
        <button className="btn btn-success"> New </button>
      </div>
      <div className="item">
        <div className="itemLeft">
          <h5>Gamefied DAOs</h5>
          <button className="resourceButton">NFTs</button>
        </div>
        <p className="resourceLogo">LOgo</p>
      </div>

      {/* add another */}
      <div className="item">
        <div className="itemLeft">
          <h5>History of DAOs</h5>
          <button className="resourceButton">Biz-Dev</button>
        </div>
        <p className="resourceLogo">LOgo</p>
      </div>

      {/* add another */}
      <div className="item">
        <div className="itemLeft">
          <h5>Boilerplate Code</h5>
          <button className="resourceButton">Development</button>
        </div>
        <p className="resourceLogo">LOgo</p>
      </div>
    </div>
  );
};

export default Resources;
