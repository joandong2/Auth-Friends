import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import { Link } from "react-router-dom";

const Friend = (props) => {
    const deleteHandler = (id) => {
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then((res) => {
                window.location.reload(true);
            })
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
                <Link
                    to={`/edit/${props.friend.id}`}
                    className="btn btn-sm btn-info"
                >
                    Edit
                </Link>
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
