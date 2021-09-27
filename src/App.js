import React, { useEffect } from 'react'
import Home from './components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  useEffect(() => {
    AOS.init()
  },[])
  return (
    <Router>
      <Switch>
          <Home></Home>
      </Switch>
    
    </Router>
  );
}

export default App;
