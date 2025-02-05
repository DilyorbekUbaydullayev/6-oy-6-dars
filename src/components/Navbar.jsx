import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/add" className="text-white hover:text-gray-200">Add Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;