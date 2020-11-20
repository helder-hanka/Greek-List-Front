//import UIGods from '../UIGods/UIGods'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import React from 'react';
import Home from '../Home/Home';
import NavBar from '../navabar/Navbar';

import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
           {/* <UIGods /> */}
        </div>
      <Switch>
           
        <Route exact path='/'>
           <Home />
        </Route>
        <Route exact path='/Nav'>
        <NavBar />
        </Route>
        {/* <Route path='/gods'>
          <Gods/>
        </Route> */}
      </Switch>
    </Router>

  );
}

export default App;
