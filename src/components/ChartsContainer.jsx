import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AreaChart, BarChart } from "./";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>monthly application</h4>
      <button
        className='btn swtich-btn'
        onClick={() => {
          setBarChart(!barChart);
        }}
      >
        Show {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChart data={monthlyApplications} />
      ) : (
        <AreaChart data={monthlyApplications} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  margin-top: 5rem;
  .swtich-btn {
    background: transparent;
    color: blue;
    box-shadow: none;
    margin: 0 auto;
  }
  h4 {
    text-align: center;
  }
`;

export default ChartsContainer;
