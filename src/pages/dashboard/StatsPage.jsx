import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChartsContainer, StatsContainer } from "../../components/";
import { showStats } from "../../features/allJobs/allJobsSlice";

const StatsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <>
      <StatsContainer />
      <ChartsContainer />
    </>
  );
};

export default StatsPage;
