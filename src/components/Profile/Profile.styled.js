import styled from 'styled-components';

export const Container = styled.div`
  background-color: #102445;
  color: #e3e3e3;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  margin: 10px auto;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const Avatar = styled.img`
  padding-top: 10px;
  width: 300px;
  border-radius: 50%;
`;
export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff0d;
  width: 100%;
`;
export const StatsItem = styled.li`
  border: 1px solid #ffffff7b;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  span:first-child {
    font-weight: 700;
  }
`;
