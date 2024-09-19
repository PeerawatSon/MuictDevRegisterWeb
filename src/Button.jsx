import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
    >
      {text}
    </button>
  );
};

export default Button;
