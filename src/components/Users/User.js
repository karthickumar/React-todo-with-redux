import React from "react";
import "./User.css";

function User(props) {
  return (
    <div className="user-list">
      <div className="user-name user-detail">{props.name}</div>
      <div className="user-email user-detail">{props.email}</div>
    </div>
  );
}

export default User;
