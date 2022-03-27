import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 2rem;
  a {
    color: Black;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Search = styled.div`
  align-items: center;
  text-align: center;
  input {
    width: 500px;
    flex: 1;
    border: 0.1rem solid #d3d6e2;
    border-radius: 1rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.5rem;
    align-items: left;
  }
  button {
    background-color: #ff5a5e;
    cursor: pointer;
    border: 0;
    border-radius: 1rem;
    padding: 0.3rem;
    margin: 0 0.3rem;
    color: #fff;
    font-size: 1rem;
  }
`;
