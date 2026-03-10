import React from 'react';

// 1. Props mein 'onClick' add kiya
const Button = ({ text, icon, variant, onClick }) => {
  const btnClass = variant === 'primary' ? 'btn-orange' : variant === 'outline' ? 'btn-outline-green' : 'btn-green';

  return (
    // 2. <button> tag ke andar onClick={onClick} laga diya
    <button className={`custom-btn ${btnClass} d-flex align-items-center gap-2`} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;