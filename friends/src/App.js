import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
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
                <nav className="navbar navbar-light bg-dark fixed-top">
                    <div className="container">
                        <p className="navbar-brand">Auth-Friends</p>

                        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                            {logged ? (
                                <>
                                    <li className="nav-item dropdown">
                                        <Link to="/friends">Friends</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/logout"
                                            onClick={() => {
                                                localStorage.removeItem(
                                                    "token"
                                                );
                                                setLogged(false);
                                            }}
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
                <main role="main" className="container">
                    <Switch>
                        <PrivateRoute
                            exact
                            path="/friends"
                            component={Friends}
                        />
                        <PrivateRoute
                            exact
                            path="/add-friend"
                            component={AddFriend}
                        />
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
