import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import Loader from './Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        toast.error('Failed to fetch posts');
        setLoading(false);
      });
  }, []);

  const deletePost = (id) => {
    axiosInstance.delete(`/posts/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
        toast.success('Post deleted successfully');
      })
      .catch(() => {
        toast.error('Failed to delete post');
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;