import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Login from './containers/login'
import Register from './containers/register'
import Dashboard from './containers/dashboard'
import NoRouteMatch from './containers/404'

import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App primary">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route component={NoRouteMatch} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
