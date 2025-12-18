import React from "react";

const Navbar = () => {
  return (
    <nav style={{ 
      padding: "16px 40px", 
      background: "#222", 
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
      Technical Test
      </h3>
      <ul style={{ 
        display: "flex", 
        listStyle: "none", 
        gap: "24px",
        margin: 0,
        padding: 0
      }}>
        <li><a href="#home" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
        <li><a href="#products" style={{ color: "#fff", textDecoration: "none" }}>Products</a></li>
        <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;