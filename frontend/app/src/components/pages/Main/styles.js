import styled from 'styled-components';

export const Container = styled.div`
  padding: 2% 3%;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10rem;
  & > * {
    line-height: 1.45;
  }
  font-size: 5rem;
`;

export const Search = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 5rem;
  input {
    flex: 1;
    border: 0.1rem solid #d3d6e2;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding: 1rem;
    margin: 0.5rem;
    align-items: left;
  }
  button {
    background-color: #ff5a5e;
    cursor: pointer;
    border: 0;
    border-radius: 1rem;
    padding: 1.2rem 0.2rem;
    margin: 0 0.3rem;
    color: #fff;
    font-size: 1.2rem;
  }
`;
