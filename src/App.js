import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import ContentTwo from "./components/ContentTwo";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <SideBar></SideBar>

          <Switch>
            <Route exact path="/">
              {" "}
              <ContentTwo key="tokenaddress" />{" "}
            </Route>
            <Route exact path="/tokenaddress">
              {" "}
              <ContentTwo key="tokenaddress" />{" "}
            </Route>
            <Route exact path="/pairaddress">
              {" "}
              <Content key="pairaddress" />{" "}
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
