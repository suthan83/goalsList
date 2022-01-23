import React, {useState} from "react";
import Card from "./../UI/Card"

import "./UserForm.css"

const UserForm = () => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const onUsernameChangeHandler = (event) => {
        console.log('Username: ', event.target.value);
        setEnteredUsername(event.target.value);
    }
    
    const onAgeChangeHandler = (event) => {
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
                    <input type="text" onChange={onUsernameChangeHandler}/>
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="text" onChange={onAgeChangeHandler}/>
                    <label htmlFor="age" type="number">Age</label>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </Card>
    )
}

export default UserForm;