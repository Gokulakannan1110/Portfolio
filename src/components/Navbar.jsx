"use client";

import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="nav-logo">
          Portfolio<span>.</span>
        </div>
        <ul className="nav-links">
          {sections.map((id) => (
            <li
              key={id}
              className="nav-link"
              onClick={() => handleClick(id)}
            >
              {id === "projects"
                ? "Project"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
