import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const EditFriend = (props) => {
    const [state, setState] = useState({
        id: "",
        name: "",
        age: "",
        email: "",
    });

    useEffect(() => {
        axiosWithAuth()
            .get(`/friends/${props.match.params.id}`)
            .then((res) => {
                setState(res.data);
            })
            .catch((err) => {
                console.log("Err is: ", err);
            });
    }, [props]);

    console.log(state);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitHander = (e) => {
        e.preventDefault();

        axiosWithAuth()
            .put(`/friends/${state.id}`, {
                name: state.name,
                age: state.age,
                email: state.email,
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
            email: "",
        });
    };

    return (
        <div className="row">
            <div className="col-md-5">
                <p>Edit Friend</p>
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
                            name="email"
                            className="form-control"
                            placeholder="Email Address..."
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark btn-sm">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditFriend;
