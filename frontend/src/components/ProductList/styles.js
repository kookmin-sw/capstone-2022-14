import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

export const ItemBtn = styled.button`
  margin: 1rem 2rem;
  font-size: 0.9rem;
  border: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  padding: 1rem 2rem;
  background-color: ${props =>
    props.isClicked ? 'rgba(0, 0, 0, 0.4)' : 'white'};
  color: ${props => (props.isClicked ? 'white' : 'black')};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Observer = styled.div`
  width: 100%;
  height: 10px;
`;
