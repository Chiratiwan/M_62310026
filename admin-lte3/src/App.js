// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
// import Report from "./components/Report";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SideBar />
        <Switch> 
          <Route component={Content} path="/" exact />
          <Route component={Home} path="/home" />
          <Route component={Aboutme} path="/aboutme" />
          <Route component={Portfolio} path="/portfolio" />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
