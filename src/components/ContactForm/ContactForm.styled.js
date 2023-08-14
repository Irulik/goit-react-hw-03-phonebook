import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 5px 0 #20212447;
`;

export const FormName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  align-items: center;
  font-size: large;
`;

export const FormNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  align-items: center;
  font-size: large;
`;

export const FormButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: rgba(23, 26, 32, 0.8);
  border: none;
  border-radius: 6px;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 185px;
  padding: 0 16px;
  color: white;
  cursor: pointer;
  

  &:hover {
    background-color: rgba(23, 26, 32, 1);
    cursor: pointer;
  }
`;