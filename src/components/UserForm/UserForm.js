import React, {useState} from "react";
import Card from "./../UI/Card"
import Button from "../UI/Button";

import "./UserForm.css"

const UserForm = () => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const usernameChangeHandler = (event) => {
        console.log('Username: ', event.target.value);
        setEnteredUsername(event.target.value);
    }
    
    const ageChangeHandler = (event) => {
        console.log('Age: ', event.target.value);
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('form submitted with >> ', enteredUsername, enteredAge);
    }

    return (
        <Card>
            <form className="form-control" action="submit" onSubmit={addUserHandler}>
                <div>
                    <input type="text" onChange={usernameChangeHandler}/>
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="text" onChange={ageChangeHandler}/>
                    <label htmlFor="age" type="number">Age</label>
                </div>
                <div>
                    <Button type="submit">Add User</Button>
                </div>
            </form>
        </Card>
    )
}

export default UserForm;