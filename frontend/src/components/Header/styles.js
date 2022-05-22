import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
`;

export const HeaderHome = styled.h2`
  padding: 0.5rem;
  margin: 1rem;
  font-family: 'NanumSquareExtraBold';
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderContents = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
`;

export const HeaderContent = styled.div`
  margin-left: 2rem;
  cursor: pointer;
`;
