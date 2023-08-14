import styled from 'styled-components';

export const Contacts = styled.ul`
  padding: 0;
  width: 300px;  
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
 box-shadow: 0 1px 6px 0 #20212447;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const Number = styled.p`
  margin: 0;
`;

export const Btn = styled.button`
  padding: 4px 8px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;