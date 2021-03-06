import styled from 'styled-components';

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
  width: 100vw;
  padding-top: 10rem;
  padding-bottom: 5rem;
  margin-left: calc(-50vw + 50%);
  background-color: #f8f9fa;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-right: 3rem;
`;

export const MainText = styled.h2`
  font-family: 'Newsreader', serif;
  font-weight: bolder;
  font-size: 80px;
  margin: 2rem 0;
`;

export const SubText = styled.div`
  max-width: 600px;
  font-size: 1.1rem;
`;

export const SvgWrapper = styled.div`
  width: ${props => props.w}px;
`;
