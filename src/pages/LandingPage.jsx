import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainImage from "../assets/images/main.svg";
import { Logo } from "../components/";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <section className='page container'>
        <div className='info'>
          <h2>
            job <span>Tracking</span> app
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis explicabo
            expedita minima, quidem aspernatur tenetur harum rerum impedit molestiae numquam quam
            alias eius quia sapiente at dolores delectus magni!
          </p>
          <Link to='/register' className='btn'>
            Login/Register
          </Link>
        </div>
        <img className='main-img img' src={mainImage} alt='Jobster' />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    margin: 0 auto;

    display: flex;
    align-items: center;
    max-width: var(--max-width);
    width: var(--fluid-width);
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  .info h2 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  .info p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default LandingPage;
