import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/aboutme';
import Header from './components/header';
import Skills from './pages/skill';
import Home from './pages/home';

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
