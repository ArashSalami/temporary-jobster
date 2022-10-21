import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import notFoundImage from "../assets/images/not-found.svg";

const ErrorPage = () => {
  return (
    <Wrapper className='full-page'>
      <div className='content'>
        <img src={notFoundImage} alt='Jobster' />
        <h3>Ooops! Page Not Found!</h3>
        <p>We cant seem to find the page you are lookin for</p>
        <Link className='btn' to='/'>
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    width: 100%;
    width: 90vw;
    max-width: 600px;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
    margin-top: 0;
    color: var(--grey-400);
    font-size: 0.8rem;
    max-width: 100%;
  }

  @media screen and (min-width: 992px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default ErrorPage;
