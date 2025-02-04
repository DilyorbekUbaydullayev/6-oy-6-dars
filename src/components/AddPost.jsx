import React, { useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('/posts', { title, body })
      .then(() => {
        toast.success('Post added successfully');
        setTitle('');
        setBody('');
      })
      .catch(() => {
        toast.error('Failed to add post');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;