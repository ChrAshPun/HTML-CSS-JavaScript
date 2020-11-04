import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import OperatingSystems from "./OperatingSystems";
import Printers from "./Printers";
import Outlook from "./Outlook";
import Powerpoint from "./Powerpoint";
import ActiveDirectory from "./ActiveDirectory";
import Exchange from "./Exchange";
import Search from "./Search";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div id="nav-filler"></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/OperatingSystems"
              component={OperatingSystems}
            />
            <Route exact path="/Printers" component={Printers} />
            <Route exact path="/Outlook" component={Outlook} />
            <Route exact path="/Powerpoint" component={Powerpoint} />
            <Route exact path="/ActiveDirectory" component={ActiveDirectory} />
            <Route exact path="/Exchange" component={Exchange} />
            <Route exact path="/Search" component={Search} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
