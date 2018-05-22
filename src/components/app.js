import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { configuration, routes } from 'routing'
import { ThemeProvider } from 'styled-components'

import Navigation from './navigation'

const { redirect } = configuration

const App = ({ theme }) => (
  <Router>
    <ThemeProvider theme={theme}>
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

const mapStateToProps = ({ theme: { selected } }) => ({ theme: selected })

export default connect(mapStateToProps)(App)
