import React from "react";
import "./peopleInfo.css";

const PeopleInfo = () => {
  return (
    <>
      <h1>🏆 DAO Leaderboard</h1>
      <div className="peopleNav">
        <p>Name A-Z</p>
        <p>AUM</p>
        <p>Members</p>
        <p>Chain</p>
        <p>Category</p>
      </div>
      <div className="dynamic">
        <img
          className="img"
          src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
          alt=""
        />
        <h1>CompoundDAO</h1>
        <h1>$23,000,000</h1>
        <h1>23</h1>
        <h1>Ethereum</h1>
        <h1>
          <p>Social</p>
          <p>Grants</p>
        </h1>
        <h1>Logo</h1>
      </div>

      {/* start middle part */}
      <div className="peopleInfoMiddle">
        {/* middle part left  */}
        <div className="peopleInfoMiddleLeft">
          <div className="middleLeftTop">
            <div className="middleTopSocial">
              <p>Love logo</p>
              <p>100</p>
              <p>twitter</p>
              <p>Insta</p>
              <p>git hub</p>
              <p>Notebook</p>
            </div>
            <p>founded March 2019</p>
          </div>
          <p>
            Compound DAO is the fisrst dao ever to be the dao that really
            matters in the game. The DAO that dictates the aggregation protocol{" "}
          </p>
          <p>
            DAO is known for this for more information here, may need to put
            governance token and adresses and things like that, need better
            icons on side and need hover states
          </p>
        </div>

        {/*middle part right  */}
        <div className="peopleInfoMiddleLeft">
          <p> Recent Proposals</p>
          <div className="proposals">
            <p>Add Enzyme Vault for Comound</p>
            <div className="proposalsLeft">
              <p>0xxxx....12 </p>
              <img
                // className="img"
                src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
                alt=""
              />
            </div>
            <div className="proposalsLeft">
              <p>0xxxx....12 </p>
              <img
                // className="img"
                src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
                alt=""
              />
            </div>
            <div className="Voting">
              <h4>Voting Process</h4>
              <h4>Dao Structure</h4>
            </div>
            <div className="votingInfo">
              <p>
                Single, Quadratic, <br /> Off-Chain
              </p>
              <p>
                Shares, Governance Token, <br /> Social Tokens
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* start bottom part */}
      <div className="peopleInfoBottom">
        <div className="peopleBottomLeft">
          <div className="leftTop">
            <p>Members (23)</p>
            <p>Twitter Followers(50)</p>
          </div>
          <div className="leftMiddle">
            <img
              // className="img"
              src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
              alt=""
            />
            <div className="leftMiddleOther">
              <p>0x1229908209318409348109414245</p>
              <p>Since 02/13/2020</p>
            </div>
          </div>

          <div className="leftMiddle">
            <img
              // className="img"
              src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
              alt=""
            />
            <div className="leftMiddleOther">
              <p>0x1229908209318409348109414245</p>
              <p>Since 02/13/2020</p>
            </div>
          </div>
        </div>

        <div className="peopleBottomRight">
          <h3>Founding Member</h3>
          <img
            // className="img"
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <img
            // className="img"
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
        </div>
      </div>
      <button>Mint Your DAO Membership As NFT</button>
    </>
  );
};

export default PeopleInfo;
