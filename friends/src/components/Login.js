import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const Login = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const submitHander = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", user)
            .then((res) => {
                props.logged(true);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/friends");
            })
            .catch((err) => {
                console.log("Err is: ", err);
            });
        setUser({
            username: "",
            password: "",
        });
    };

    return (
        <div className="row">
            <div className="col-md-5">
                <p>Login</p>
                <form onSubmit={submitHander}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark btn-sm">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
