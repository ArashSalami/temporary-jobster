import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { FormRow } from "../../components/";
import { updateUser } from "../../features/user/userSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);

  const [userData, setuserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;
    if (!name || !lastName || !email || !location) {
      toast.error("Please Fill All Fields");
      return;
    }
    dispatch(updateUser({ name, lastName, email, location }));
  };

  return (
    <Wrapper>
      <h4>Profile</h4>

      <form className='profile-form' onSubmit={handleSubmit}>
        <FormRow
          labelText='Name'
          type='text'
          value={userData.name}
          onChange={handleChange}
          name='name'
        />
        <FormRow
          labelText='Last Name'
          type='text'
          value={userData.lastName}
          onChange={handleChange}
          name='lastName'
        />
        <FormRow
          labelText='E-Mail'
          type='email'
          value={userData.email}
          onChange={handleChange}
          name='email'
        />
        <FormRow
          labelText='Location'
          type='text'
          value={userData.location}
          onChange={handleChange}
          name='location'
        />
        <button type='submit' className='btn submit-btn' disabled={isLoading}>
          Save Changes
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--white);
  padding: 3rem 4rem;
  box-shadow: var(--shadow-2);

  .profile-form {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .submit-btn {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }

  @media screen and (min-width: 992px) {
    .profile-form {
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
    .profile-form {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
    .form-row {
      margin-bottom: 0;
    }
  }
`;

export default ProfilePage;
