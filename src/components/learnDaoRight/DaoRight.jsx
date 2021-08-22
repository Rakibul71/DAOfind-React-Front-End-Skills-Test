import React from "react";
import "./daoRight.css";
// import img2 from "../../images/image31.png";
import img2 from "../../images/img2.png";

const DaoRight = () => {
  return (
    <div className="daoRight">
      <div className="topSection">
        <h3>DAO Academy</h3>
        <div className="topInfoSection">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="infoSection">
            <h5>Intro To Legal DAOs</h5>
            <p>134 enrolled, 2 month course</p>
          </div>
        </div>
        {/* new part */}
        <div className="topInfoSection">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="infoSection">
            <h5>Intro To Legal DAOs</h5>
            <p>134 enrolled, 2 month course</p>
          </div>
        </div>
        {/* new part */}
        <div className="topInfoSection">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="infoSection">
            <h5>Intro To Legal DAOs</h5>
            <p>134 enrolled, 2 month course</p>
          </div>
        </div>
      </div>
      {/* middle part */}
      <div className="middleSection">
        <h1>tvDAO</h1>
        <div className="middleInfo">
          <img src={img2} alt="" />
          <p>History of DAOs</p>
          <div className="middleLeft">
            <p>History of DAOs</p>
            <p>History of DAOs</p>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="bottomTop">
        <h1>Top LearnCurators</h1>

        <div className="bottomInfo">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="infoBottom">
            <h3>0x712910909..1a 100 DAO Resources curated</h3>
            <p>active 1 day ago</p>
          </div>
        </div>
        <div className="bottomInfo">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="infoBottom">
            <h3>0x712910909..1a 100 DAO Resources curated</h3>
            <p>active 1 day ago</p>
          </div>
        </div>
      </div>
      <button>+ Curate</button>
    </div>
  );
};

export default DaoRight;
