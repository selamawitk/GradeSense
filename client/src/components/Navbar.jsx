import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light fixed-top" style={{ backgroundColor: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        {/* <a href="#" className="navbar-brand fw-bold text-white fs-3 p-0">🎓GPA TRACKER</a> */}
        <ul className="navbar-nav d-flex flex-row ms-auto">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
          <li className="nav-item mx-3"><Link className="nav-link text-white" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
