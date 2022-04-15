import React from "react";

const Post = (props) => {
  return (
    <div className="item">
      <img src="https://lastfm.freetls.fastly.net/i/u/ar0/488f54a23f117b517cfbe769ff55a413" />
      {props.text}
      <div>
        <span>Likes: </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
