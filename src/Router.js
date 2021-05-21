import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { ProgressBar } from 'react-bootstrap'

// Route-based code splitting
const home = lazy(() => import("./views/pages/home/home"));
const Wizard = lazy(() => import("./views/pages/wizard/Wizard"));
const Thanks = lazy(() => import("./views/pages/thanks/Thanks"));
const error404 = lazy(() => import("./views/pages/errors/404.jsx"));
const error500 = lazy(() => import("./views/pages/errors/500.jsx"));

const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Suspense fallback={<ProgressBar now={100} />}>
          <Component {...props} />
        </Suspense>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {

  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/" component={home} />
          <AppRoute exact path="/cotiza" component={Wizard} />
          <AppRoute exact path="/gracias" component={Thanks} />
          <AppRoute component={error404} fullLayout />
          <AppRoute component={error500} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
