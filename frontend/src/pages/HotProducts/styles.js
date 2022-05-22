import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const HotHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

export const HotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`;

export const HotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  margin: auto;
  background-color: #f8f9fa;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 15%);
`;

export const HotImg = styled.img`
  width: 120px;
  height: 78px;
  margin: auto;
`;

export const HotKeyword = styled.div`
  padding-top: 0.2rem;
  text-align: center;
  font-size: 0.9rem;
`;
