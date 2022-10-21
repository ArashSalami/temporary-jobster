import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { StatItem } from "./";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      title: "Pending Applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#eed45f",
      bcg: " #ebdea8",
    },
    {
      title: "Interviews Scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: " #e0e8f9",
    },
    {
      title: "Jobs Declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: " #ffeeee",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((stat, index) => {
        return <StatItem {...stat} key={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media screen and (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default StatsContainer;
