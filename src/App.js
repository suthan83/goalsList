import React, {useState} from 'react';
import UserForm from './components/UserForm/UserForm'
import UsersList from './components/UsersList/UsersList'

import './App.css'

const App = () => {
  const [usersData, setUsersData] = useState([]);

  // store data coming from UserForm submission
  const addUserHandler = (submittedUserData) => {
    const newUserData = {
      username: submittedUserData.username,
      age: submittedUserData.age
    }
    // setUsersDate((users) => (...users, {
    //   username: submittedData.username,
    //   age: submittedData.age
    // }))

    setUsersData((prevUsersData) => {
      return [...prevUsersData, newUserData]
    })
  }

  const sampleData = [
    {
      username: "User #1",
      age: 43
    },
    {
      username: "Second User",
      age: 18
    },
    {
      username: "User #3",
      age: 26
    },
  ]
  return (
    <div>
      <section className='user-form'>
        <p>User Form</p>
        <UserForm onAddUser={addUserHandler}/>
      </section>
      <section className='user-list'>
        <UsersList users={usersData}/>
      </section>
    </div>
  );
};

export default App;
