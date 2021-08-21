import React from "react";
import "./daoRight.css";

const DaoRight = () => {
  return (
    <div className="daoRight">
      <div className="top">
        <h1>DAO Academy</h1>
        <div className="topInfo">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="info">
            <h3>Intro To Legal DAOs</h3>
            <p>134 enrolled, 2 month course</p>
          </div>
        </div>
        {/* new part */}
        <div className="topInfo">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="info">
            <h3>Intro To Legal DAOs</h3>
            <p>134 enrolled, 2 month course</p>
          </div>
        </div>
        {/* new part */}
        <div className="topInfo">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <div className="info">
            <h3>Intro To Legal DAOs</h3>
            <p>134 enrolled, 2 month course</p>
          </div>
        </div>
      </div>
      {/* middle part */}
      <div className="middle">
        <h1>tvDAO</h1>
        <div className="middleInfo">
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
