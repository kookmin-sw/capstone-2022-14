import styled from 'styled-components';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.75);
  animation: modal-bg-show 0.5s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 70%;
  overflow-y: auto;
  position: relative;
  background: #ffffff;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  animation: modal-show 0.5s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 1rem;
  font-size: 2rem;
`;

export const Main = styled.div`
  position: absolute;
  top: 6rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 3rem;
`;

export const Desc = styled.div`
  font-size: 1.2rem;
`;

export const CloseBtn = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ImgBox = styled.div``;
