import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 2rem;
  animation: show 0.5s;
  @keyframes show {
    from {
      margin-top: -30px;
      opacity: 0;
    }
    to {
      margin-top: 0px;
      opacity: 1;
    }
  }
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
  border-radius: 1rem;
  padding: 0.8rem;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
  }
`;

export const ProductImg = styled.img`
  width: 120px;
  height: 78px;
  margin-bottom: 5px;
`;

export const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
