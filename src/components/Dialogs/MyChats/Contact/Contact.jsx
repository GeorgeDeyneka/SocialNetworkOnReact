import React from "react";
import { NavLink } from "react-router-dom";

const Contact = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className="chat-active">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Contact;
