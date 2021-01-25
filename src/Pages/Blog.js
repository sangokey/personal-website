import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Blog({ isOpen, toggle }) {
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      Blog
    </div>
  );
}

export default Blog;
