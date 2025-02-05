import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList.jsx';
import AddPost from './components/AddPost.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element={<PostList/>} />
          <Route path="/add" element={<AddPost/>} />
        </Routes>
        <ToastContainer />
      </div>
   
  );
}

export default App;