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
        toast.success('Post muvoffaqqiyatli qo`shildi');
        setTitle('');
        setBody('');
      })
      .catch(() => {
        toast.error('Post qo`shishda Xatolik');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 mt-5 bg-white shadow-md rounded border border-gray-200">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Post
        </button>
      </div>
      
    </form>
  );
};

export default AddPost;