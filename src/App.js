import React from 'react';
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router} from "react-router-dom"; 

function App() {
  return (
    <Router>
    <div className="App">
          <p>Lets make a router</p>
    </div>
<Route path="/" component={Home} />
<Route path="/About" component={About} />
    
    </Router>
  );
}

export default App;
