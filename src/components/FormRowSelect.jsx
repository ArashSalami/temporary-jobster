import React from "react";
import styled from "styled-components";

const FormRowSelect = ({ labelText, onChange, value, name, list }) => {
  return (
    <Wrapper className='form-row'>
      <label className='form-label' htmlFor={name}>
        {labelText || name}
      </label>
      <select className='form-input' value={value} onChange={onChange} name={name} id={name}>
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-input {
    height: 35px;
  }

  select,
  option {
    text-transform: capitalize;
  }
`;

export default FormRowSelect;
