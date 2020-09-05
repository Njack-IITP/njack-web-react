import React,{useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import GsocPage from './components/GsocPage'
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
       <Route path="/team" render={()=><Team darkMode={darkMode}/>} />
       <Route path="/gsoc" render={()=><GsocPage darkMode={darkMode}/>} />
       <Route path="/" render={()=><Home darkMode={darkMode}/>} />
      </Switch>
    </div>
  );
}

export default App;
