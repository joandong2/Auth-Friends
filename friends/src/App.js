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
            <div className="container">
                <div className="App">
                    <ul>
                        {logged ? (
                            <>
                                <li>
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
                                <li>
                                    <Link to="/friends">Friends</Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
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
                </div>
            </div>
        </Router>
    );
}

export default App;
