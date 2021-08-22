import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
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
    </Router>
  );
}

export default App;
