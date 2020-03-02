import React, { Component } from "react";
import homePage from './components/homePage';

import { BrowserRouter, Route,Switch} from 'react-router-dom';

import  './App.css';

class App extends Component {
  render() {
    return(
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={homePage} />
      
    </Switch>
</BrowserRouter>
    );

    }
}

export default App;
