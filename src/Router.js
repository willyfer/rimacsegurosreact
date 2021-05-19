import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom" 
import { ProgressBar} from 'react-bootstrap'

// Route-based code splitting
 const home = lazy(() => import("./views/pages/home/home"));
 const error404 = lazy(() => import("./views/pages/errors/404.jsx"));

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
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter