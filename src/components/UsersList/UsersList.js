import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css"

const UsersList = (props) => {
    //check user list length. If zero return empty data message
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.username}, ({user.age})
                    </li>
                ))}   
            </ul>
        </Card>
    );
}

export default UsersList;