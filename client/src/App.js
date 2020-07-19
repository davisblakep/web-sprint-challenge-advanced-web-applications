import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';

import Login from "./components/Login";
import BubblesPage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblesPage} />
      </div>
    </Router>
  );
}

export default App;
