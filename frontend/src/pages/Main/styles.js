import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  margin-top: 5rem;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid rgb(228, 228, 228);
  border-radius: 1rem;
  padding: 0.8rem;

  :hover {
    background-color: rgb(220, 220, 220);
  }
`;

export const ProductImg = styled.img`
  width: 120px;
  height: 78px;
`;

export const ProductName = styled.div`
  margin-top: 0.3rem;
  color: black;
  font-weight: 600;
  text-decoration-line: none;
`;
