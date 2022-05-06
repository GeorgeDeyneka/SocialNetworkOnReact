import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postMap = props.posts.map((p) => (
    <Post text={p.text} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let writePost = () => {
    let textPost = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(textPost));
  };

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={writePost}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button className="btn" onClick={addPost}>
            Add Post
          </button>
        </div>
      </div>
      <div className="posts">{postMap}</div>
    </div>
  );
};

export default MyPosts;
