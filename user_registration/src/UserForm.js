import React from 'react';

function UserForm(props) {
  
  const checkForm = (event) => {
    event.preventDefault();
    if (!props.firstname.length || !props.lastname.length || !props.phone.length || !props.email.length){
      alert("All fields are required.");
    }

    else {
      alert(`Hello ${props.firstname} ${props.lastname}.`);
    }
  }
  
  return (
    <form onSubmit={checkForm}>
      <div className="UserForm">
        <input placeholder='First Name' name="firstname" value={props.firstname} onChange={props.inputChanged}/><br />
        <input placeholder='Last Name' name="lastname" value={props.lastname} onChange={props.inputChanged} /><br />
        <input placeholder='Phone' name="phone" value={props.phone} onChange={props.inputChanged} /><br />
        <input placeholder='Email' name="email" value={props.email} onChange={props.inputChanged} /><br />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default UserForm;