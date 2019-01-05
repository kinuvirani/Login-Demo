import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import CRoute from '../custom_route/custom_route.js';

import Header from '../header/header';
import Login from '../login/login';
import Landing from '../landing/landing';
import PageNotFound from '../pageNotFound/pageNotFound.js';
import UnauthorizedAccess from '../unauthorized_access/unauthorized_access.js';
import P1 from '../p1/p1.js';
import P2 from '../p2/p2.js';
import P3 from '../p3/p3.js';
class App extends Component {
  render() {
    const admin="admin";
    const employee="employee";
    return (
      <Router>
        <div className="App">
          <Header />
        <Switch>
          <CRoute cprivate path="/" exact component={Landing} />
          <CRoute  path="/login" component={Login} />
          <CRoute  cprivate crole={[admin,employee]} path="/p1" component={P1} />
          <CRoute  cprivate crole={[admin]} path="/p2" component={P2} />
          <CRoute  cprivate crole={[employee]} path="/p3" component={P3} />

          <CRoute cprivate  exact path="/unauthorized_access"  component={UnauthorizedAccess} />
          <CRoute component={PageNotFound} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
