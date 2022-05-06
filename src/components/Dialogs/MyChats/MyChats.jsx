import React from "react";
import {
  sendMessageActionCreator,
  updateNewTextMessageActionCreator,
} from "../../../redux/state";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";

const MyChats = (props) => {
  let messageMap = props.messages.map((m) => (
    <Message text={m.text} />
  ));

  let userMap = props.users.map((u) => (
    <Contact name={u.name} id={u.id} />
  ));

  let newMessageElement = React.createRef();

  let writeMessage = () => {
    let textMessage = newMessageElement.current.value;
    props.dispatch(updateNewTextMessageActionCreator(textMessage));
  };

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <div className="dialogs">
      <div className="users">{userMap}</div>
      <div className="messages">{messageMap}</div>

      <div>
        <textarea
          onChange={writeMessage}
          ref={newMessageElement}
          value={props.newMessageText}
        ></textarea>
      </div>
      <div>
        <button className="btn" onClick={sendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default MyChats;
