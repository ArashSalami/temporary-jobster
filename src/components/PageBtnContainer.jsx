import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const Pages = Array.from({ length: numOfPages }, (_, index) => index + 1);
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return (
    <Wrapper>
      <button
        onClick={() => {
          prevPage();
        }}
      >
        Prev
      </button>
      {Pages.map((item, index) => {
        return (
          <button
            onClick={() => {
              dispatch(changePage(item));
            }}
            className={`${item === page ? "active" : ""}`}
            key={index}
          >
            {item}
          </button>
        );
      })}
      <button
        onClick={() => {
          nextPage();
        }}
      >
        Next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  button {
    background-color: var(--primary-100);
    border: none;
    padding: 0.4rem 0.75rem;
    border-radius: 3px;
    cursor: pointer;
  }
  .active {
    background: var(--primary-700);
    color: var(--white);
  }
`;

export default PageBtnContainer;
