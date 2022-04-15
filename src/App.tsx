import { PageDashboard } from "./Pages/Dashboard";
import { PageWatch } from "./Pages/Watch";
import { Home } from "./Pages/Home";
import { PageLogin } from "./Pages/Login";
import Modal from "react-modal";
import { useState } from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/dashboard" component={PageDashboard}/>
            <Route path="/watch" component={PageWatch}/>
            <Route path="/login" component={PageLogin}/>
          </Switch>
      </Router>
    </> 
  );
}
