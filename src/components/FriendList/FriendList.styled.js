import styled from 'styled-components';

export const Friends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px auto;
  padding: 0;
  align-items: center;
  width: 300px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 3px 5px;
  box-shadow: #102445 5px 5px 5px;
  border-radius: 5px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ ishide }) => (ishide ? 'green' : 'red')};
`;
