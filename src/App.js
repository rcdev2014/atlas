import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Login from './containers/login'
import Register from './containers/register'
import Dashboard from './containers/dashboard'
import NoRouteMatch from './containers/404'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App secondary">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NoRouteMatch} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
