import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <h1>The Sondos Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add a new blog</Link>
      </div>
    </div>
  );
}

export default Navbar;
