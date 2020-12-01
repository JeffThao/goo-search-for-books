import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
    <div>
     <Nav />
     <Jumbotron />
     <Route exact path="/" component={Books} />
     <Route exact path="/saved-books" component={Saved} />
    </div>
    </Router>
  );
}

export default App;
