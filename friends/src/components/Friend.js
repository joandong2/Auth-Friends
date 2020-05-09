import React from "react";

const Friend = (props) => {
    return (
        <>
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </>
    );
};

export default Friend;
