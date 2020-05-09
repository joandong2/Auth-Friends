import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
    const [logged, setLogged] = useState(
        localStorage.getItem("token") === null ? false : true
    );

    const loggedIn = (logs) => {
        setLogged(logs);
    };

    return (
        <Router>
            <div className="App">
                <nav class="navbar navbar-light bg-light fixed-top">
                    <a class="navbar-brand" href="#">
                        Auth-Friends
                    </a>

                    <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                        {logged ? (
                            <>
                                <li class="nav-item">
                                    <Link to="/friends">Friends</Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/logout"
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            setLogged(false);
                                        }}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li class="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <main role="main" className="container">
                    <Switch>
                        <PrivateRoute
                            exact
                            path="/friends"
                            component={Friends}
                        />
                        {/*<Route path="/login" component={Login} />
                        <Route component={Login} /> */}

                        <Route
                            path="/login"
                            render={(props) => (
                                <Login {...props} logged={loggedIn} />
                            )}
                        />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
