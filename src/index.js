import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";



let rerenderEntireTree = (state) => {
ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)
reportWebVitals();
