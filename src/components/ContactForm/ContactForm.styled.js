import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  margin-bottom: 20px;
  max-width: 400px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  max-width: 200px; ;
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  padding: 8px;
  cursor: pointer;
`;
