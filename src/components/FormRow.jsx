import React from "react";
import styled from "styled-components";

const FormRow = ({ labelText, type, onChange, value, name }) => {
  return (
    <Wrapper className='form-row'>
      <label className='form-label' htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className='form-input'
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={name}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-input {
    height: 35px;
  }
`;

export default FormRow;
