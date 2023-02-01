import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterInput
        type="text"
        placeholder=" "
        value={value}
        onChange={onChange}
      ></FilterInput>
      <FilterLabel>Find contacts by name</FilterLabel>
    </FilterContainer>
  );
};
