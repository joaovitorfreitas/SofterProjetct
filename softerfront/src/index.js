import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { usuarioAutenticado } from './Services/auth';

import Login from '../src/Pages/Login'
import Home from '../src/Pages/Home'
import Pesquisar from '../src/Pages/Pesquisar'
import HeaderComponent from "./Components/headerComponent";
import footerComponent from "./Components/footerComponent";


const Permissao = ({ component : Component }) => (
  <Route
    render = {props => 
      usuarioAutenticado() ? 
      <Component {...props}/> : 
      <Redirect to="/"/>
    }
  />
)

const rotas = (
  <Router>
    <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route exact path = "/Login" component = {Login}/>
      <Permissao exact path = "/Home" component = {Home}/>
      <Permissao exact path = "/Pesquisar" component = {Pesquisar}/>
      <Redirect to="/" />
    </Switch>
  </Router>
)
ReactDOM.render(rotas, document.getElementById('root'));