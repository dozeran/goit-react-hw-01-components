import styled from 'styled-components';

export const Table = styled.table`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ecf1f4;
  border-radius: 4px;
  border-spacing: 0;
  text-align: center;
`;

export const Thead = styled.thead`
  background-color: #102445;
  color: #e3e3e3;
  text-transform: uppercase;
  tr th {
    padding: 10px;
  }
`;

export const Tbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #ecf1f4;
    padding: 5px 5px;
  }
  tr:hover {
    background-color: #102445;
    color: #e3e3e3;
    cursor: default;
  }
  tr td {
    padding: 5px 5px;
  }

  tr td:first-letter {
    text-transform: uppercase;
  }
`;
