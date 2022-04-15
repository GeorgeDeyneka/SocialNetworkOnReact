import React from "react";
import { NavLink } from "react-router-dom";
// import './css/_Navbar.scss'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Your Profile</NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Your Messages</NavLink>
      </div>
      <div className="item">
        <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> Your News</NavLink>
      </div>
      <div className="item">
        <NavLink to="/audio" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Your Music</NavLink>
      </div>
      <div className="item">
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Your Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
