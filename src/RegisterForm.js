import React from 'react';
import FormInput from './FormInput';
import Button from './Button';
import './App.css';

const RegisterForm = () => {
  const handleRegister = () => {
    alert('Register button clicked');
  };

  const handleLogin = () => {
    alert('Login button clicked');
  };

  const handleForgotPassword = () => {
    alert('Forgot Password button clicked');
  };

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

        <Button text="Register" onClick={handleRegister} />
      </form>
      
      <p>Already have an account?</p>
      <Button text="Login" onClick={handleLogin} className="secondary" />
      <Button text="Forgot Password?" onClick={handleForgotPassword} className="link" />
    </div>
  );
};

export default RegisterForm;
