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
  height: 40%;
  position: relative;
  background: #ffffff;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
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

export const AlarmWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1``;

export const GuideText = styled.div`
  font-size: 0.8rem;
  color: #a3a3a3;
  padding-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.2rem;
`;

export const InputItem = styled.input`
  width: 200px;
  height: 29px;
  font-size: 1rem;
  border: 1px solid #a3a3a3;
  margin-top: 2px;
  background-color: #fff;
`;

export const SelectBox = styled.select`
  width: 200px;
  margin-top: 1rem;
  padding: 0.8em 0.5em;
  border: 1px solid #999;
  font-family: inherit;
  border-radius: 0px;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  bottom: 1rem;
  border: 0;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: white;
  border-radius: 2rem;
  background-color: #777777;
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
