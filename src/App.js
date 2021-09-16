import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './components/projects';
import Contact from './components/contact';
import About from './components/aboutme';
import Header from './components/header';
import Skills from './components/skill';
import Home from './components/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
