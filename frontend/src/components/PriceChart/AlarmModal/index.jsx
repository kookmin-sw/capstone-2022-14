import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import * as Style from './styles';
import CloseIcon from '@mui/icons-material/Close';

function AlarmModal({ query, price, onClose }) {
  const outModal = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const [alarmInfo, setAlarmInfo] = useState({
    alarmPrice: price,
    keyword: query,
  });

  // input 변경 감지
  const handleKeywordChange = useCallback(e => {
    const { name, value } = e.target;
    console.log(e.target);
    setAlarmInfo({ ...alarmInfo, [name]: value });
  }, []);

  return createPortal(
    <Style.Background
      ref={outModal}
      onClick={e => {
        if (outModal.current === e.target) {
          onClose();
        }
      }}
    >
      <Style.Content>
        <Style.AlarmWrapper>
          <Style.Header>알림 등록</Style.Header>
          <Style.InputWrapper>
            <Style.inputText>price : </Style.inputText>
            <input
              maxLength="100"
              type="text"
              value={alarmInfo.alarmPrice}
              name="alarmPrice"
              onChange={handleKeywordChange}
            />
          </Style.InputWrapper>
          <Style.InputWrapper>
            <Style.inputText>keyword : </Style.inputText>
            <input
              maxLength="100"
              type="text"
              value={alarmInfo.keyword}
              name="keyword"
              onChange={handleKeywordChange}
            />
          </Style.InputWrapper>
          <Style.SubmitBtn>등록</Style.SubmitBtn>
        </Style.AlarmWrapper>
        <Style.CloseBtn>
          <CloseIcon
            fontSize="large"
            sx={{ color: 'white' }}
            onClick={onClose}
          />
        </Style.CloseBtn>
      </Style.Content>
    </Style.Background>,
    document.getElementById('modal'),
  );
}

export default AlarmModal;
