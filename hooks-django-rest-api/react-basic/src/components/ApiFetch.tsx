import React, { useState, useEffect } from "react";
import axios from "axios";

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((post: IPost) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetch;
