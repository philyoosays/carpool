import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
