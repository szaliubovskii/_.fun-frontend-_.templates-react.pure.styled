import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import './app.css'

import { configuration, routes } from './routing'

import Navigation from './navigation'

const { redirect } = configuration

const App = () => (
  <Router>
    <Fragment>
      <Navigation>
        <Fragment>
          <Switch>
            <Redirect exact from="/" to={redirect} />
            {routes.map(({ name, path, component }) => (
              <Route key={name} path={path} component={component} />
            ))}
          </Switch>
        </Fragment>
      </Navigation>
    </Fragment>
  </Router>
)

export default App
