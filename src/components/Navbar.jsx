import React from "react";
import { useState } from "react";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleSidebar, clearStore } from "../features/user/userSlice";
import Logo from "./Logo";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn' type='button' onClick={() => dispatch(toggleSidebar())}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className='btn-container'>
          <button className='btn' type='button' onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />

            {user?.name || "User"}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              onClick={() => dispatch(clearStore("Logging Out ..."))}
              className='dropdown-btn'
              type='button'
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .nav-center {
    display: flex;
    width: 90vw;
    justify-content: space-between;
    align-items: center;
  }
  .toggle-btn {
    background: transparent;
    color: var(--primary-500);
    border: none;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  h2 {
    margin-bottom: 0;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .btn,
  .dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  .btn {
    box-shadow: var(--shadow-2);
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    visibility: hidden;
    border-radius: var(--borderRadius);
  }

  .dropdown-btn {
    background: var(--primary-100);
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: var(--borderRadius);
    color: var(--primary-800);
    text-align: center;
    width: 100%;
  }
  .show-dropdown {
    visibility: visible;
  }
  .logo-text {
    display: none;
  }
  .logo {
    width: 100px;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 992px) {
    .nav-center {
      margin: 0 auto;
      width: 90%;
    }
    .logo-text {
      display: block;
      margin-bottom: 0;
    }
    .logo {
      display: none;
    }
  }
`;

export default Navbar;
