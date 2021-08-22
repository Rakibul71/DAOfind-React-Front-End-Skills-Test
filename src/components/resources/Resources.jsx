import React from "react";
import "./resources.css";
import res1 from "../../images/img1.png";
import res2 from "../../images/img2.png";
import res3 from "../../images/img3.png";
// import img1 from "../../images/favicon-daofind.png";

const Resources = () => {
  return (
    <div className="resources">
      <div className="top">
        <h4>Resources</h4>
        <button className="btnn"> New </button>
      </div>
      <div className="item">
        <div className="itemLeft">
          <h5>Gamefied DAOs</h5>
          <button className="resourceButton">NFTs</button>
        </div>
        <p className="resourceLogo">
          <img src={res1} alt="" />
        </p>
      </div>

      {/* add another */}
      <div className="item">
        <div className="itemLeft">
          <h5>History of DAOs</h5>
          <button className="resourceButton">Biz-Dev</button>
        </div>
        <p className="resourceLogo">
          <img src={res2} alt="" />
        </p>
      </div>

      {/* add another */}
      <div className="item">
        <div className="itemLeft">
          <h5>Boilerplate Code</h5>
          <button className="resourceButton">Development</button>
        </div>
        <p className="resourceLogo">
          <img src={res3} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Resources;
