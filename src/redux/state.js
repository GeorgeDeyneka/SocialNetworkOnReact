import {rerenderEntireTree} from "../render"

let state = {
  profilePage: {
    posts: [
      { text: "My first post", id: "1", likesCount: "9" },
      { text: "Hi! How are you?", id: "2", likesCount: "3" },
    ],
    newPostText: 'text'
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
      { text: "Hello", id: "1" },
      { text: "How are you?", id: "2" },
      { text: "...", id: "3" },
      { text: "Well done", id: "4" },
      { text: "Hi", id: "5" },
      { text: "Go walk", id: "6" },
    ],
  },
};


export let addPost = () => { 
  let newPost = {
    text: state.profilePage.newPostText,
    id: 5,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export default state;
