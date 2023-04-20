import React, { useState } from 'react';
import UserForm from './UserForm';
import './App.css';

function App() {
  const [user, setUser] = useState({firstname: '', lastname:'', email:'', phone:''});

  const inputChanged = (event) =>{
    setUser({...user, [event.target.name]: event.target.value});
  }

  return (
    <div className="App">
      <UserForm firstname = {user.firstname} lastname = {user.lastname} phone = {user.phone} email = {user.email} inputChanged = {inputChanged} />
    </div>
  );
}

export default App;