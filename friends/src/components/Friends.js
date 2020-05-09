import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

import Friend from "./Friend.js";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    axiosWithAuth()
        .get("/friends")
        .then((res) => {
            setFriends(res.data);
        })
        .catch((err) => {
            console.log("Err is: ", err);
        });

    return friends.map((friend) => {
        return (
            <div key={friend.id}>
                <Friend friend={friend} />
            </div>
        );
    });
};

export default Friends;
