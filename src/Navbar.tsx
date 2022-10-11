import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>|<NavLink to="/login">Login</NavLink>|
      <NavLink to="/dashboard">Dashboard</NavLink>|
      <NavLink to="/settings">Settings</NavLink>
    </>
  );
}

export default Navbar;
