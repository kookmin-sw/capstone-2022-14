import styled from 'styled-components';

export const ResultWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-gap: 3rem;
  place-content: space-evenly space-evenly;
  @media (max-width: 1210px) {
    grid-template-columns: repeat(4, 200px);
    grid-gap: 3rem;
    place-content: space-evenly space-evenly;
  }
  @media (max-width: 956px) {
    grid-template-columns: repeat(3, 200px);
    grid-gap: 3rem;
    place-content: space-evenly space-evenly;
  }
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
`;

export const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  font-size: 0.7rem;
  padding: 0.2rem 0;
  font-weight: bolder;
`;

export const Date = styled.div`
  font-size: 0.5rem;
`;

export const Result = styled.li`
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-size: 1.4rem;
  background-color: #87ceeb;
  cursor: pointer;
  border: 0;
  border-radius: 1rem;
  padding: 1.2rem 1.2rem;
  margin: 0.5rem 3rem;
  font-size: 1.2rem;
`;

export const Scroll = styled.div`
  margin-bottom: 8rem;
`;
