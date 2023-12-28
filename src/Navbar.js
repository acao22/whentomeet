import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4 style = {{
        backgroundColor: '#fff6f6',
        color: '#ffa4ae',
      }}>when2meet</h4>
      <div className = "links">
        <a href="/">about</a>
        <a href="/">new event</a>
      </div>
    </nav>
  );
};

export default Navbar;
