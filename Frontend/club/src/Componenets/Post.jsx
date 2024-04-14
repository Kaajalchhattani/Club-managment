import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Post.css";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8800/Blog");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    fetchPosts();
  }, []);
  const defaultImage = "https://via.placeholder.com/300x200.png?text=No+Image+Available";
  return (
    <div className="post-container">
        <div className="header5">
      <h1>Let's Read</h1>
      </div>
      <div className="link"><Link to="/Blog">Let's Create</Link></div>
      
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.imagelink || defaultImage} alt={post.title || "Default Image"} className="post-image"/>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 20)}...</p>
            <Link to={`/PostBlog/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
