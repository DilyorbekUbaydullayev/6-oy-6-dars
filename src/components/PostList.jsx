import React, { useState, useEffect } from 'react';
import axiosInstance from '../services/axiosInstance';
import { toast } from 'react-toastify';
import Loader from './Loader.jsx'
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
        toast.success("Ma'lumotlar muvoffaqqiyatli olindi!");
      })
      .catch(error => {
        toast.error('Postlarni olishda Xatolik!');
        setLoading(false);
      });
  }, []);

  const deletePost = (id) => {
    axiosInstance.delete(`/posts/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
        toast.success('Post muvoffaqqiyatli o`chirildi');
      })
      .catch(() => {
        toast.error('Postni o`chirishda Xatolik');
      });
  };

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="p-4 border rounded shadow-sm flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
            <button
              onClick={() => deletePost(post.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;