import React from "react";
import navLinks from "../utils/nav-links";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <Wrapper className='nav-links'>
      <ul>
        {navLinks.map((navLink) => {
          const { id, title, icon, path } = navLink;
          return (
            <li key={id}>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to={path}
                onClick={toggleSidebar}
              >
                <span className='icon'>{icon}</span>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default NavLinks;
