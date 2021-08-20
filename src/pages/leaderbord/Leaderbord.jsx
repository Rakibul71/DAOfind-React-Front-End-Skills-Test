// import React, { useState, userEffect } from "react";

// const Leaderbord = () => {
//   const [data, setData] = useState({
//     name: "",
//   });
//   const [daoData, setDaoData] = useState([]);
//   userEffect(() => {
//     axios
//       .get("https://github.com/codingshot/random-data/blob/main/daolist.txt")
//       .then((res) => {
//         console.log("Response from main API: ", res);
//         console.log("Home Data: ", res.data.ad);
//         let companyData = res.data.ad;
//         setData({
//           Company: companyData.company,
//           Description: companyData.text,
//         });
//         console.log("Colors Data: ", res.data.data);
//         setColorsData(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="leaderboard">
//       <h1>DAO Leaderboard</h1>
//       <div>
//         <p>NAME A-Z {data.name}</p>
//         <p>AUM</p>
//         <p>Members</p>
//         <p>Chain</p>
//         <p>Category</p>
//       </div>
//     </div>
//   );
// };

// export default Leaderbord;

import React, { useEffect } from "react";
import { userData } from "../../dummyData";

const Leaderbord = () => {
  const getUsers = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/codingshot/random-data/main/daolist.txt"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  });
  return (
    <div>
      <h3>Sadia akter bro</h3>
    </div>
  );
};

export default Leaderbord;
