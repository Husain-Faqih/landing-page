import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Husain
      </a>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={toggleMenu}>
          Home
        </a>

        <a href="#about" onClick={toggleMenu}>
          About
        </a>

        <a href="#features" onClick={toggleMenu}>
          Features
        </a>

        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
