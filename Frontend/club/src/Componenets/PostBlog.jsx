import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./PostBlog.css";

function PostBlog() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`http://localhost:8800/Blog/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id]);

    return (
        <div className="blog-container">
            {post ? (
                <div className="post-card">
                    <img className='post-image' src={post.imagelink} alt={post.title} />
                    <div className="post-content">
                        <h2>{post.title}</h2>
                        <p>{post.content.split('\n').map((line, index) => (
                  <span key={index}>{line}<br/></span>
              ))}</p>
                        <p className="author">By: {post.author}</p>
                    </div>
                    <Link className="back-button" to="/Post">Back to Home</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PostBlog;
