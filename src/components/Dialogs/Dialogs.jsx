import React from "react";
import MyChats from "./MyChats/MyChats";

const Dialogs = (props) => {
  return (
    <div>
      <MyChats
        users={props.dialogsPage.users}
        messages={props.dialogsPage.messages}
        newMessageText={props.dialogsPage.newMessageText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
