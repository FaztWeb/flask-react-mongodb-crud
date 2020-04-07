import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Users } from "./components/Users";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
