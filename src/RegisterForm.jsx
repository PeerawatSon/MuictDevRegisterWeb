import React from 'react';
import FormInput from './FormInput';
import Button from './Button';
import './App.css';

const RegisterForm = () => {

  return (
    <div className="form-container">
      <h1>ICT Mahidol Devclub</h1>
      <form>
        <h3>Please enter your basic information</h3>
        <FormInput label="Student ID" type="text" placeholder="Student ID" />
        <FormInput label="First Name" type="text" placeholder="First Name" />
        <FormInput label="Last Name" type="text" placeholder="Last Name" />

        <h3>Please enter your credentials</h3>
        <FormInput label="Username" type="text" placeholder="Username" />
        <FormInput label="Password" type="password" placeholder="Password" />
        <FormInput label="Re-enter your Password" type="password" placeholder="Re-enter your Password" />

        <Button text="Register"/>
      </form>
      
      <p>Already have an account?</p>
      <Button text="Login" />
      <Button text="Forgot Password?"  />
    </div>
  );
};

export default RegisterForm;
