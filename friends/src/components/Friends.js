import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import { Link } from "react-router-dom";

import Friend from "./Friend.js";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                setFriends(res.data);
            })
            .catch((err) => {
                console.log("Err is: ", err);
            });
    }, []);

    return (
        <>
            <Link to="/add-friend" className="btn btn-sm btn-info">
                Add Friend
            </Link>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {friends.map((friend) => {
                        return (
                            <tr key={friend.id}>
                                <Friend friend={friend} />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Friends;
