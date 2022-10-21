import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { FormRow, FormRowSelect } from "../../components/";
import { handleChange, clearValues, createJob, editJob } from "../../features/job/jobSlice";

const AddJobPage = () => {
  const {
    isEditing,
    position,
    company,
    jobLocation,
    statusOptions,
    jobTypeOptions,
    status,
    jobType,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please Fill All Fields!");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({ jobId: editJobId, job: { position, company, jobLocation, jobType, status } })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, status, jobType }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, []);
  return (
    <Wrapper>
      <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
      <form onSubmit={handleSubmit} className='job-form'>
        <FormRow
          name='position'
          labelText='Position'
          type='text'
          value={position}
          onChange={handleJobInput}
        />
        <FormRow
          name='company'
          labelText='Company'
          type='text'
          value={company}
          onChange={handleJobInput}
        />
        <FormRow
          name='jobLocation'
          labelText='Location'
          type='text'
          value={jobLocation}
          onChange={handleJobInput}
        />
        <FormRowSelect
          list={statusOptions}
          name='status'
          labelText='Status'
          onChange={handleJobInput}
          value={status}
        />
        <FormRowSelect
          list={jobTypeOptions}
          name='jobType'
          labelText='Job Type'
          onChange={handleJobInput}
          value={jobType}
        />
        <div className='btn-container'>
          <button
            onClick={() => {
              dispatch(clearValues());
            }}
            type='button'
            className='btn btn-hipster'
          >
            Clear Fields
          </button>
          <button type='submit' className='submit-btn btn'>
            {isEditing ? "Save Changes" : "Add Job"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

export default AddJobPage;
