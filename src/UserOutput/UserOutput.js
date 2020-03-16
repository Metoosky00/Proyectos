import React from "react";
import './UserOutput.css'

const UserOutput = ({userName}) => {
  return (
    <div className="UserOutput">
      <p>UserName: {userName}</p>
      <p>I hope i'll be overwritten</p>
    </div>
  );
};

export default UserOutput;