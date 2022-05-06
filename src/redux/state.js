let store = {
  _state: {
    profilePage: {
      posts: [
        { text: "This is your first post!", id: "1", likesCount: "9" },
        { text: "So, you can add new post...", id: "2", likesCount: "3" },
        {
          text: "Just write your message in area...",
          id: "3",
          likesCount: "4",
        },
        { text: "And click on the button!", id: "4", likesCount: "6" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      users: [
        { name: "George", id: "1" },
        { name: "Adelina", id: "2" },
        { name: "Xie", id: "3" },
        { name: "Rita", id: "4" },
        { name: "Konstantine", id: "5" },
        { name: "Slavik", id: "6" },
      ],
      messages: [
        { text: "Hello! I'm the creator of this project.", id: "1" },
        { text: "All messages in database...", id: "2" },
        { text: "You can see here.", id: "3" },
        {
          text: "And you can add your personal message! It's simple.",
          id: "4",
        },
        { text: "Just write whatever you want...", id: "5" },
        { text: "And click 'Send Message'. Let's go, it's easy!", id: "6" },
      ],
      newMessageText: "",
    },
  },
  callSubscriber() {
    console.log("rerender");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    } else if (action.type === "UPDATE-NEW-TEXT-MESSAGE") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber();
    } else if (action.type === "ADD-POST") {
      let newPost = {
        text: this._state.profilePage.newPostText,
        id: "5",
        likesCount: "0",
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === "SEND-MESSAGE") {
      let newMessage = {
        text: this._state.dialogsPage.newMessageText,
        id: "7",
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber();
    }
  },
};

export const updateNewPostTextActionCreator = (textPost) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: textPost,
});

export const updateNewTextMessageActionCreator = (textMessage) => ({
  type: "UPDATE-NEW-TEXT-MESSAGE",
  newText: textMessage,
});

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const sendMessageActionCreator = () => ({ type: "SEND-MESSAGE" });

export default store;
window.store = store;
