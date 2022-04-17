import React from "react";
import Post from "./Post/Post";
import { updateNewPostText } from "../../../redux/state";

const MyPosts = (props) => {
  let postMap = props.posts.map((p) => (
    <Post text={p.text} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let textPost = newPostElement.current.value;
    props.updateNewPostText(textPost);
  };

  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className="posts">{postMap}</div>
    </div>
  );
};

export default MyPosts;
