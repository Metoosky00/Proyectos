import React from "react";

const UserInput = ({ changed, currentName }) => {
  const inputStyle = {
        border:'2px solid red'
  };
  return <input 
  type="text" 
  onChange={changed} 
  style={inputStyle}
  value={currentName} 
  />;
};

export default UserInput;
