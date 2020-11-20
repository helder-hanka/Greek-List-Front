import React from 'react';
import Navbar from './Components/Navbar';

import './App.css';

import Home from './Components/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gods from './Components/Gods/Gods';
import About from './Components/About/About';
import Contact from './Components/Contact/ContactUS';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/gods' component={Gods} />
        <Route path='/about-us' component={About} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;