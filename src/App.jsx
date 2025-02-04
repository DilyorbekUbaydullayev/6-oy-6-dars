import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" component={PostList} />
          <Route path="/add" component={AddPost} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;