import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NotFound from "../pages/not-found";

const renderRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                    // if (route.redirect) {
                    //     return <Redirect to={{ pathname: route.redirect }} push/>
                    // }
                    if (!route.auth || authed || route.path === authPath) {
                        return <route.component {...props} {...extraProps} route={route} />
                    }
                    return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                }}
            />
        ))}
        {/*<Route path="/*" component={NotFound}/>*/}
    </Switch>
) : null;

export default renderRoutes