import React from 'react';
import UserForm from './components/UserForm/UserForm'

import './App.css'

const App = () => {


  return (
    <div>
      <section className='user-form'>
        <p>User Form</p>
        <UserForm/>
      </section>
      <section className='user-list'>
        <p>User List</p>
      </section>
    </div>
  );
};

export default App;
