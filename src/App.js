import React,{useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Topnav from './components/Topnav';
import Team from './components/Team';
import './App.css';

function App() {
  const [darkMode, setDarkMode]  = useState(0); 
  const handleDarkModeChange = ()=> setDarkMode(darkMode^1);
  return (
    <div className={darkMode?"App dark":"App"}>
      <Topnav onDarkModeToggle={handleDarkModeChange}/>
      <Switch>
       <Route path="/team" component={Team} />
       <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
