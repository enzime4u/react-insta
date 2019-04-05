import React from "react";

const InputComponent = props => {
  return (
    <div>
      <label>{props.title}</label>
      <input 
        placeholder={props.placeholder}
        type={props.type} 
      />
    </div>
  );
};

export default InputComponent;
