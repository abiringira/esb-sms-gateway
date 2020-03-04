import React, { Component } from "react";
import loginPage from './components/loginPage';
import dashboard from './components/dashboard'

import { BrowserRouter, Route,Switch} from 'react-router-dom';

import  './App.css';

class App extends Component {
  render() {
    return(
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={loginPage} />
      <Route exact={true} path="/dashboard" component={dashboard} />
      
    </Switch>
</BrowserRouter>
    );

    }
}

export default App;
