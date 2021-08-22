import React from "react";
import "./peopleInfo.css";
import NewDao from "../../components/newDao/NewDao";
import Resources from "../../components/resources/Resources";

const PeopleInfo = () => {
  return (
    <div className="peopleInfo">
      <div className="peopleInfoLeft">
        <h1>🏆 DAO Leaderboard</h1>
        <div className="dynamic">
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
          <h4>CompoundDAO</h4>
          <h4>$23,000,000</h4>
          <h4>23</h4>
          <h4>Ethereum</h4>
          <h4>
            <p>Social</p>
            <p>Grants</p>
          </h4>
          <h3 className="dynamicElement glob">
            <i class="fas fa-globe"></i>
          </h3>
        </div>

        {/* start middle part */}
        <div className="peopleInfoMiddle">
          {/* middle part left  */}
          <div className="peopleInfoMiddleLeft">
            <div className="middleLeftTop">
              <div className="middleTopSocial">
                <p>
                  <i class="fas fa-heart"></i>
                </p>
                <p>100</p>
                <p>
                  <i class="fab fa-twitter"></i>
                </p>
                <p>
                  <i class="fas fa-paper-plane"></i>
                </p>
                <p>
                  <i class="fab fa-github"></i>
                </p>
                <p>
                  <i class="fas fa-file-alt"></i>
                </p>
              </div>
              <p>founded March 2019</p>
            </div>
            <p className="paragraph">
              Compound DAO is the fisrst dao ever to be the dao that really
              matters in the game. The DAO that dictates the aggregation
              protocol{" "}
            </p>
            <p className="paragraph">
              DAO is known for this for more information here, may need to put
              governance token and adresses and things like that, need better
              icons on side and need hover states
            </p>
          </div>

          {/*middle part right  */}
          <div className="peopleInfoMiddleRight">
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
              <h5>Members (23)</h5>
              <h5>Twitter Followers(50)</h5>
            </div>
            <div className="leftMiddle">
              <img
                // className="img"
                src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
                alt=""
              />
              <div className="leftMiddleOther">
                <h4>0x1229908209318409348109414245</h4>
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
                <h4>0x1229908209318409348109414245</h4>
                <p>Since 02/13/2020</p>
              </div>
            </div>
          </div>

          <div className="peopleBottomRight">
            <h5>Founding Member</h5>
            <div>
              <img
                src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
                alt=""
              />
              <img
                src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="peopleInfoButton">
          <button>Mint Your DAO Membership As NFT</button>
        </div>
        <div className="dynamic">
          <img
            className="img"
            src="https://daolist.fyi/nextimg/https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1242184851152928769%2FwG2eTAfD_normal.jpg"
            alt=""
          />
          <h4>CompoundDAO</h4>
          <h4>$23,000,000</h4>
          <h4>23</h4>
          <h4>Ethereum</h4>
          <h4>
            <p>Social</p>
            <p>Grants</p>
          </h4>
          <h3 className="dynamicElement glob">
            <i class="fas fa-globe"></i>
          </h3>
        </div>
      </div>
      {/* peopleinfo right */}
      <div className="peopleInfoRight">
        <div className="leaderBoardNew">
          <NewDao></NewDao>
        </div>
        <div className="leaderBoardResources">
          <Resources></Resources>
        </div>
      </div>
    </div>
  );
};

export default PeopleInfo;
