import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Topnav from './components/Topnav';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topnav/>
      <Switch>
       <Route path="/team" component={Team} />
       <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
