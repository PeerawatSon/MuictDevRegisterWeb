import React from 'react';

const FormInput = ({ label, type, placeholder }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <br />
      <input type={type} placeholder={placeholder} style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
    </div>
  );
};

export default FormInput;
