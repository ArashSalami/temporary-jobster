import React from "react";
import { FormRow, FormRowSelect } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

import styled from "styled-components";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector(
    (store) => store.allJobs
  );
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    if (isLoading) return;
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <h3>Search Form</h3>
      <form onSubmit={handleSubmit} className='job-form'>
        <FormRow
          name='search'
          labelText='Search'
          type='text'
          value={search}
          onChange={handleSearchInput}
        />

        <FormRowSelect
          list={[...statusOptions, "all"]}
          name='searchStatus'
          labelText='Status'
          value={searchStatus}
          onChange={handleSearchInput}
        />
        <FormRowSelect
          list={[...jobTypeOptions, "all"]}
          name='searchType'
          labelText='Job Type'
          value={searchType}
          onChange={handleSearchInput}
        />
        <FormRowSelect
          list={[...sortOptions]}
          name='sort'
          labelText='Sort'
          value={sort}
          onChange={handleSearchInput}
        />
        <div className='btn-container'>
          <button
            onClick={() => {
              dispatch(clearFilters());
            }}
            type='button'
            className='btn btn-hipster'
          >
            Clear Fields
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 2rem;
  background: var(--white);
  padding: 3rem 4rem;
  box-shadow: var(--shadow-2);

  .job-form {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .btn-container {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 1rem;
  }
  .btn {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }

  @media screen and (min-width: 992px) {
    .job-form {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .submit-btn {
      margin-top: 1rem;
    }
    .form-row {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1120px) {
    .job-form {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
    .form-row {
      margin-bottom: 0;
    }
  }
`;

export default SearchContainer;
