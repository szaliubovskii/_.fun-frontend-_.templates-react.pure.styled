import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { configuration, routes } from './routing'
import { ThemeProvider } from 'styled-components'

import './app.css'

import Navigation from './navigation'
import { themeDark, themeLight } from './theme'

const { redirect } = configuration
const App = () => (
  <Router>
    <ThemeProvider theme={themeDark}>
      <Navigation routes={routes}>
        <Fragment>
          <Switch>
            <Redirect exact from="/" to={redirect} />
            {routes.map(({ name, path, component }) => (
              <Route key={name} path={path} component={component} />
            ))}
          </Switch>
        </Fragment>
      </Navigation>
    </ThemeProvider>
  </Router>
)

export default App
