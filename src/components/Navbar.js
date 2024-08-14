import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={handleLoginClick}>Login</button>
    </nav>
  );
};

export default Navbar;