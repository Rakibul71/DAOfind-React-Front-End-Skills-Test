import React from "react";
import "./newDao.css";

const NewDao = () => {
  return (
    <div className="newDao">
      <h3>Newly Listed DAOs</h3>
      <div className="person">
        <div className="img">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <h3>PartyDAO</h3>
          <p>$13,000,000 aum</p>
          <div className="bottom">
            <p>added 1 day ago</p>
            <p>ETH</p>
          </div>
        </div>
      </div>

      {/* add 2nd one */}
      <div className="person">
        <div className="img">
          <img
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <h3>PartyDAO</h3>
          <p>$13,000,000 aum</p>
          <div className="bottom">
            <p>added 1 day ago</p>
            <p>ETH</p>
          </div>
        </div>
      </div>

      <button>+ ADD DAO</button>
    </div>
  );
};

export default NewDao;
