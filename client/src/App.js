// Import libraries
import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
// Import components
import NavBar from "./components/NavBar";
import HomePage from "./components/containers/HomePage";
import SummaryPage from "./components/containers/SummaryPage";
// Define variables

// -----------------------------
const App = () => {
  return (
    <div>
      <Router>
      <NavBar/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/summary" exact component={SummaryPage}/>
      </Router>

      
      
    </div>
  )
}

export default App;