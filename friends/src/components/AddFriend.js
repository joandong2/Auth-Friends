import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const AddFriend = (props) => {
    const [state, setState] = useState({
        name: "",
        age: "",
        eadd: "",
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitHander = (e) => {
        e.preventDefault();

        axiosWithAuth()
            .post("/friends", {
                name: state.name,
                age: state.age,
                email: state.eadd,
            })
            .then((res) => {
                console.log(res);
                props.history.push("/friends");
            })
            .catch((err) => {
                console.log("Err is: ", err);
            });

        setState({
            name: "",
            age: "",
            eadd: "",
        });
    };

    return (
        <>
            <p>Add Friend</p>
            <form onSubmit={submitHander}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name..."
                        value={state.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        placeholder="Age..."
                        value={state.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="eadd"
                        className="form-control"
                        placeholder="Email Address..."
                        value={state.eadd}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-dark btn-sm">
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddFriend;
