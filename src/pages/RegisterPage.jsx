import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initalState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const RegisterPage = () => {
  const [values, setValues] = useState(initalState);
  const { isMember, name, email, password } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((store) => store.user);
  useEffect(() => {
    if (user) {
      const timer = () => {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      };
      timer();
      clearTimeout(timer);
    }
  }, [user]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill all fields");
      return;
    }
    let user;
    if (isMember) {
      user = { email, password };
      dispatch(loginUser(user));
      return;
    }
    user = { name, email, password };
    dispatch(registerUser(user));
  };
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <div className='logo'>
          <Logo />
        </div>
        <h3>{isMember ? "Login" : "Register"}</h3>
        {!isMember && (
          <FormRow
            type='text'
            name='name'
            value={name}
            id='name'
            onChange={handleChange}
            labelText='Name'
          />
        )}
        <FormRow
          type='email'
          name='email'
          value={email}
          id='email'
          onChange={handleChange}
          labelText='E-Mail'
        />
        <FormRow
          type='password'
          name='password'
          value={password}
          id='password'
          onChange={handleChange}
          labelText='Password'
        />
        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <button
          className='btn btn-hipster btn-block'
          onClick={() => {
            dispatch(loginUser({ email: "testUser@test.com", password: "secret" }));
          }}
          type='button'
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Test User"}
        </button>
        <p className='member'>
          {isMember ? "Not a member?" : "Already a member?"}
          <button className='member-btn' type='button' onClick={toggleMember}>
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  .form {
    max-width: 400px;
    border-top: 5px var(--primary-500) solid;
  }
  .logo {
    text-align: center;
    margin-bottom: 1rem;
  }
  h3 {
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member {
    text-align: center;
  }
  .member-btn {
    margin-top: 1.5rem;
    background: transparent;
    border: none;
    color: var(--primary-500);
    cursor: pointer;
  }
`;

export default RegisterPage;
