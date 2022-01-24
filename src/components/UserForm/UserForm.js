import React, {useState} from "react";
import Card from "./../UI/Card"
import Button from "../UI/Button";

import "./UserForm.css"

const UserForm = (props) => {
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
        
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log('form submitted with >> ', enteredUsername, enteredAge);
        resetEnteredInput();
        props.onAddUser({username: enteredUsername, age: enteredAge})
    }

    const resetEnteredInput = () => {
        setEnteredUsername('');
        setEnteredAge('');
    }

    return (
        <Card>
            <form className="form-control" action="submit" onSubmit={addUserHandler}>
                <div>
                    <input type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="text" onChange={ageChangeHandler} value={enteredAge}/>
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