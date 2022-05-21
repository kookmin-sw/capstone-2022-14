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
  width: 600px;
  height: 90%;
  position: relative;
  background: #ffffff;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
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

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Title = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`;

export const Price = styled.div``;

export const Desc = styled.span`
  white-space: pre-line;
  text-align: left;
  font-size: 1rem;
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
