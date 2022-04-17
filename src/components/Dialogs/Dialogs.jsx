import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    console.log(text);
  };
  let userMap = props.state.users.map((u) => (
    <DialogsItem name={u.name} id={u.id} />
  ));
  let messageMap = props.state.messages.map((m) => <Message text={m.text} />);

  return (
    <div className="dialogs">
      <div className="users">{userMap}</div>
      <div className="messages">{messageMap}</div>
      <textarea ref={newMessageElement}></textarea>
      <div>
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
