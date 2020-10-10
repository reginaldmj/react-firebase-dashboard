import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config';
import {Signup} from '/Signup'
import  { Route, Switch, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header></Header>
      <div className="app">
        <div className="ui grid container"></div>
          <Switch>
            <Route exact path ="/signup" component={Signup} />
          </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}
 
export default App;
