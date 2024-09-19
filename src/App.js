import React, { useState, useEffect} from 'react';
import './App.css';

const UserForm =()=>{
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [submitted, setSubmitted] = useState('');

const handleNameChange = (e)=> {
  setName(e.target.value);
}
const handleEmaileChange =(e)=> {
  setEmail(e.target.value);
}

// Effect

useEffect(()=>{
  console.log(`Current Name: ${name}`);
  console.log(`Current Name: ${email}`);
},[name,email]);

const handleSubmit = (e)=> {
  e.preventDefault();
  setSubmitted(true);
};

return (
  <div className='form-container'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit} className='form'>
      <div className='form-group'>
        <label>Name: </label>
        <input 
        type='text' 
        value={name} 
        onChange={handleNameChange} 
        className='form-input' />
      </div>
      <div className='form-group'>
        <label>Email: </label>
        <input 
        type='text' 
        value={email} 
        onChange={handleEmaileChange} 
        className='form-input' />
      </div>
      <button type='submit' className='form-submit'>Submit</button>
    </form>

    {submitted &&(
      <div className='submitted-data'>
        <h2>User Information</h2>
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Email: </strong>{email}</p>
      </div>
    )}
  </div>
);
};
export default UserForm;
