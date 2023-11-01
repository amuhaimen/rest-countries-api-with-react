import React, { useEffect, useState } from "react";
import "../posts/posts.css";

const Posts = () => {
  return (
    <div>
      <LoadPosts />
    </div>
  );
};

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Post</h1>
      <div className="post-container">
        {posts.map((post, index) => (
          <DisplayPosts key={index} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

function DisplayPosts(props) {
  return (
    <div className="post">
      <h1>title:{props.title}</h1>
      <p>body:{props.body}</p>
    </div>
  );
}

export default Posts;
