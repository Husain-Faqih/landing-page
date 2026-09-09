import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Husain
      </a>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={toggleMenu}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={toggleMenu}
        >
          About
        </a>

        <a
          href="#features"
          className={activeSection === "features" ? "active" : ""}
          onClick={toggleMenu}
        >
          Features
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={toggleMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
