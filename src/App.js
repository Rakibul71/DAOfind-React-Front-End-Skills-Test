import "./App.css";
import NewDao from "./components/newDao/NewDao";
import Resources from "./components/resources/Resources";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import Leaderbord from "./pages/leaderbord/Leaderbord";
import LearnDao from "./pages/learnDao/LearnDao";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      {/* <Leaderbord></Leaderbord> */}
      {/* <Home></Home> */}
      {/* <LearnDao></LearnDao> */}
      {/* <NewDao></NewDao> */}
      <Resources></Resources>
    </div>
  );
}

export default App;
