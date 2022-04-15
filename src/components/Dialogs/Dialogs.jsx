import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let userMap = props.state.users.map((u) => (
    <DialogsItem name={u.name} id={u.id} />
  ));
  let messageMap = props.state.messages.map((m) => <Message text={m.text} />);
  return (
    <div className="dialogs">
      <div className="users">{userMap}</div>
      <div className="messages">{messageMap}</div>
    </div>
  );
};

export default Dialogs;
