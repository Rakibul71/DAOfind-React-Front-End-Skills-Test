import React, { useEffect, useState } from "react";
import NewDao from "../../components/newDao/NewDao";
import Resources from "../../components/resources/Resources";
import "./leaderbord.css";
const Leaderbord = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/codingshot/random-data/main/daolist.txt"
    );
    // console.log(response);
    setUsers(await response.json());
    // console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="leaderBoard">
      {/* left part of leaderbord */}
      <div className="leaderBoardLeft">
        <h1>🏆 DAO Leaderboard</h1>
        <div className="dynamic">
          <p>NAME A-Z</p>
          <p>AUM</p>
          <p>Members</p>
          <p>Chain</p>
          <p>Category</p>
        </div>
        {users.map((curElem) => {
          return (
            <div className="dynamic">
              <img className="img dynamicElement" src={curElem.img} alt="" />
              <h3 className="dynamicElement">{curElem.name}</h3>
              <h3 className="dynamicElement">{curElem.aum}</h3>
              <h3 className="dynamicElement">{curElem.twl}</h3>
              <h3 className="dynamicElement">Ethereum</h3>
              <h5 className="dynamicElement">
                <p>Social</p>
                <p>Grants</p>
              </h5>
              <h3 className="dynamicElement">Logo</h3>
            </div>
          );
        })}
      </div>
      {/* right part of leaderbord */}
      <div className="leaderBoardRight">
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

export default Leaderbord;
