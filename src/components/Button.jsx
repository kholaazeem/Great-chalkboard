import React from "react";




const Button = ({text , variant , icon}) => {   // 'props' is an object and here we use destructuring props     

    const btnClass = variant === 'primary' ? 'btn-orange' : 'btn-green'; // here 'primary' is wesbiste theme color and its name can be any
  return (
      
    <button className= {`custom-btn ${btnClass} d-flex align-items-center gap-2`}>
    {icon && <span>{icon}</span>}
    <span>{text}</span>
    </button>
  )
}

export default Button