import React, { useEffect, useState } from "react";
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
    <div>
      {users.map((curElem) => {
        return (
          <div className="dynamic">
            <img className="img" src={curElem.img} alt="" />
            <h1>{curElem.name}</h1>
            <h1>{curElem.aum}</h1>
            <h1>{curElem.twl}</h1>
            <h1>Ethereum</h1>
            <h1>
              <p>Social</p>
              <p>Grants</p>
            </h1>
            <h1>Logo</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Leaderbord;
