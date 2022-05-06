import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

export const IphoneContainer = styled.div`
  display: flex;
  justify-content: start;
`;

export const ItemBtn = styled.button`
  margin: 1rem 2rem;
  font-size: 1rem;
  border: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
