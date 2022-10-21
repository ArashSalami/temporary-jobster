import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { deleteJob, setEditJob } from "../features/job/jobSlice";
import { useDispatch } from "react-redux";

const Job = ({ position, jobLocation, company, createdAt, status, jobType, _id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>
          <p>{company.charAt(0)}</p>
        </div>
        <div className='info'>
          <h3 className='position'>{position}</h3>
          <p className='company'>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <span className='icon-container'>
            <FaLocationArrow className='icon' /> {jobLocation}
          </span>
          <span className='icon-container'>
            <FaCalendarAlt className='icon' /> {moment(createdAt).format("MMM Do, YYYY")}
          </span>
          <span className='icon-container'>
            <FaBriefcase className='icon' /> {jobType}
          </span>
          <p className={`status status-${status}`}>{status}</p>
        </div>
        <footer>
          <Link
            to='/add-job'
            type='button'
            className='btn edit-btn'
            onClick={() => {
              console.log(status, jobType);
              dispatch(
                setEditJob({ editJobId: _id, position, company, jobLocation, jobType, status })
              );
            }}
          >
            Edit
          </Link>
          <button
            type='button'
            className='btn delete-btn'
            onClick={() => {
              dispatch(deleteJob(_id));
            }}
          >
            Delete
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-1);
  border-radius: 4px;
  header {
    display: grid;
    padding: 1rem 2rem;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
    border-bottom: 1px solid var(--grey-300);
    padding-bottom: 1rem;
  }

  .main-icon {
    display: grid;
    place-items: center;
    width: 75px;
    height: 75px;
    background: var(--primary-500);
    border-radius: 3px;
    p {
      margin: 0;
      font-size: 1.5rem;
      text-transform: uppercase;
      color: var(--white);
    }
  }
  .info {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    h3,
    p {
      margin: 0;
    }
    .company {
      font-size: 1.2rem;
      color: var(--grey-500);
    }
    gap: 1rem;
  }
  .content {
    margin-top: 1rem;
    padding: 1rem 2rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;

    .icon-container {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.2rem;
      text-transform: capitalize;
      color: var(--grey-900);
    }
    .icon {
      color: var(--grey-400);
    }
    .status {
      margin: 0;
      text-transform: capitalize;
      padding: 0.25rem 1rem;
      border-radius: 5px;
      justify-self: start;
      font-size: 1.1rem;
    }
    .status-declined {
      background: var(--red-light);
    }
    .status-pending {
      background-color: #eed45f;
    }
    .status-interview {
      background: var(--green-light);
    }
  }
  footer {
    display: flex;
    gap: 1rem;
    font-size: 1.1rem;
    .edit-btn {
      background: var(--green-light);
      color: var(--grey-900);
    }
    .delete-btn {
      background: var(--red-dark);
      color: var(--white);
    }
  }
  @media screen and (min-width: 576px) {
    .content-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 992px) {
    .content-center {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 1120px) {
    .content-center {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Job;
