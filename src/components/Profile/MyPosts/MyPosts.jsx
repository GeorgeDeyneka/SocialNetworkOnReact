import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postMap = props.posts.map((p) => (
    <Post text={p.text} likesCount={p.likesCount} />
  ));
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className="posts">{postMap}</div>
    </div>
  );
};

export default MyPosts;
