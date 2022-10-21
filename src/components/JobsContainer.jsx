import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import { PageBtnContainer, Job } from "./";

const JobsContainer = () => {
  const { jobs, totalJobs, isLoading, numOfPages, page, search, searchType, searchStatus, sort } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchType, searchStatus, sort]);
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  return (
    <Wrapper>
      <h4 className='total-hobs'>{totalJobs} jobs found </h4>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .total-jobs {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default JobsContainer;
