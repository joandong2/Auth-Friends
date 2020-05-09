import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const Friend = (props) => {
    const deleteHandler = (id) => {
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .catch((err) => {
                console.log("Err is: ", err);
            });
    };

    return (
        <>
            <td>{props.friend.id}</td>
            <td>{props.friend.name}</td>
            <td>{props.friend.age}</td>
            <td>{props.friend.email}</td>
            <td>
                <button type="button" className="btn btn-sm btn-info">
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                        deleteHandler(props.friend.id);
                    }}
                >
                    Delete
                </button>
            </td>
        </>
    );
};

export default Friend;
