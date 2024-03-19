import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post"; 
const URL = "http://localhost:5000/posts";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetchHandler().then((data) => setPosts(data.posts));
    }, []);
    console.log(posts);
    return (
      <div>
        <ul>
          {posts &&
            posts.map((post, i) => (
              <li key={i}>
                <Post post={post} />
              </li>
            ))}
        </ul>
      </div>
    );
}

