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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className="boxContainer">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Leaderbord></Leaderbord>
          </Route>
          <Route path="/learnDao">
            <LearnDao></LearnDao>
          </Route>
          <Route path="/peopleInfo">
            <PeopleInfo></PeopleInfo>
          </Route>
        </Switch>
      </div>

      {/* <Home></Home> */}
      {/* <LearnDao></LearnDao> */}
      {/* <NewDao></NewDao> */}
      {/* <Resources></Resources> */}
      {/* <DaoRight></DaoRight> */}
    </Router>
  );
}

export default App;
