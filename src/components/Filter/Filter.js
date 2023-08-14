import React from 'react';
import { FilterName } from './Filter.styled';

const Filter = ({ value, handleChange }) => (
  <FilterName>
    <input
      type="text"
      value={value}
      onChange={event => handleChange(event.target.value)}
      placeholder="Search contacts..."
    />
  </FilterName>
);

export default Filter;