import styled from 'styled-components';

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Section = styled.section`
  width: 300px;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #102445;
  color: #e3e3e3;
  border-radius: 4px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  border: 1px solid #102445;
  border-radius: 5px;
`;

export const Persontage = styled.span`
  font-size: 20px;
`;
