import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/" className="hover" activeClassName="nav-active">
          <li>accueil</li>
        </NavLink>
        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet1</li>
            </NavLink>
            <NavLink
              to="/project-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet2</li>
            </NavLink>
            <NavLink
              to="/project-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet3</li>
            </NavLink>
            <NavLink
              to="/project-4"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/contact" className="hover" activeClassName="nav-active">
          <li>contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
