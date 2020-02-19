import React from 'react';
import './App.css';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {history} from "./router";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import Main from "./pages/main";
// import NotFound from "./pages/not-found";
import Login from "./pages/login";

const login = sessionStorage.getItem('token');

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                {/*{renderRoutes(routes)}*/}
                <Switch>
                    <Route path="/login" exact component={Login} />
                    {/*<Route path="/404" exact component={NotFound} />*/}
                    <Route path="/" render={() => (login ? <Main/> : <Redirect to="/login"/>)} />
                </Switch>
            </Router>
        </Provider>
    )
};

export default App;