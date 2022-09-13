import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from '../src/Pages/Login'
import Home from '../src/Pages/Home'
import Pesquisar from '../src/Pages/Pesquisar'
import HeaderComponent from "./Components/headerComponent";
import footerComponent from "./Components/footerComponent";




const rotas = (
  <Router>
    <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route exact path = "/Login" component = {Login}/>
      <Route exact path = "/Home" component = {Home}/>
      <Route exact path = "/Pesquisar" component = {Pesquisar}/>
    </Switch>
  </Router>
)
ReactDOM.render(rotas, document.getElementById('root'));