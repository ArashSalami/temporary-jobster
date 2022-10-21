import React from "react";
import styled from "styled-components";

const StatItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span> <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 2rem;
  border-bottom: 5px solid ${(props) => props.color};
  background: var(--white);
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: ${(props) => props.color};
  }
  .title {
    text-align: left;
    margin: 0;
  }
`;

export default StatItem;
