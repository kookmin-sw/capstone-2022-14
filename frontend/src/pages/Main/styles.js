import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 10rem 2rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

export const ProductItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid rgb(228, 228, 228);
  border-radius: 1rem;
  padding: 0.8rem;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: all 0.5s;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -webkit-transform:scale(1.1); 
  }
`;

export const ProductImg = styled.img`
  width: 120px;
  height: 78px;
  margin-bottom: 5px;
`;