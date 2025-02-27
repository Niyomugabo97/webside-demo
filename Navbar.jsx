import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/register" style={{ margin: "10px", color: "white" }}>Register</Link>
      <Link to="/admin" style={{ margin: "10px", color: "white" }}>Admin</Link>
    </nav>
  );
};

export default Navbar;
