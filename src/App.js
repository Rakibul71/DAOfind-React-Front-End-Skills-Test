import "./App.css";
import DaoRight from "./components/learnDaoRight/DaoRight";
import NewDao from "./components/newDao/NewDao";
import Resources from "./components/resources/Resources";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import Leaderbord from "./pages/leaderbord/Leaderbord";
import LearnDao from "./pages/learnDao/LearnDao";
import PeopleInfo from "./pages/peopleInfoDao/PeopleInfo";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      {/* <Leaderbord></Leaderbord> */}
      {/* <Home></Home> */}
      {/* <LearnDao></LearnDao> */}
      {/* <NewDao></NewDao> */}
      {/* <Resources></Resources> */}
      {/* <DaoRight></DaoRight> */}
      {/* <PeopleInfo></PeopleInfo> */}
    </div>
  );
}

export default App;
