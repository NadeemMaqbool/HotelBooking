import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Cities from './pages/cities/Cities';
import Hotels from './pages/hotels/Hotels';
import NewCity from './pages/cities/NewCity';
import NewHotel from './pages/hotels/NewHotel';

export default class App extends Component {
  render() {
    return (
      <div>
          <Router> 
            <Switch>
              <Route path="/cities" exact>
                <Cities />
              </Route>
              <Route path="/city/new" exact>
                <NewCity />
              </Route>
              <Route path="/hotels" exact>
                <Hotels />
              </Route>
              <Route path="/hotel/new" exact>
                <NewHotel />
              </Route>
              <Redirect to="/"/>
            </Switch>  
          </Router>
      </div>
    )
  }
}
