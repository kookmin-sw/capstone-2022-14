import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import * as Style from './styles';
import CloseIcon from '@mui/icons-material/Close';

function AlarmModal({ onClose }) {
  const outModal = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const [alarmInfo, setAlarmInfo] = useState({
    alarmPrice: '',
    keyword: '',
  });

  // input 변경 감지
  const handleKeywordChange = useCallback(e => {
    const { name, value } = e.target;
    setAlarmInfo({ ...alarmInfo, [name]: value });
  }, []);

  const products = [
    'AirPods 1Gen',
    'AirPods 2Gen',
    'AirPods 3Gen',
    'AirPods Pro',
    'AirPods Max',
    'Series 1',
    'Series 2',
    'Series 3',
    'Series 4',
    'Series 5',
    'Series 6',
    'Series 7',
    'SE',
    'iPad',
    'iPad Air',
    'iPad mini',
    'iPad Pro',
    'iPad Pro(12.9)',
    'iPhone 6',
    'iPhone 6+',
    'iPhone 6s',
    'iPhone 6s+',
    'iPhone 7',
    'iPhone 7+',
    'iPhone 8',
    'iPhone 8+',
    'iPhone X',
    'iPhone XR',
    'iPhone Xs',
    'iPhone Xs Max',
    'iPhone 11',
    'iPhone 11 Pro',
    'iPhone 11 Pro Max',
    'iPhone 12 mini',
    'iPhone 12',
    'iPhone 12 Pro',
    'iPhone 12 Pro Max',
    'iPhone 13 mini',
    'iPhone 13',
    'iPhone 13 Pro',
    'iPhone 13 Pro Max',
    'iPhone SE',
    'iPhone SE Gen2',
    'iPhone SE Gen3',
    'Mac mini',
    'Mac Studio',
    'Mac Pro',
    'iMac',
    'MacBook Air',
    'MacBook Pro',
  ];

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
          <Style.Header>알림등록</Style.Header>
          <Style.GuideText>
            이메일과 가격을 입력하고, 키워드를 선택하세요.
          </Style.GuideText>
          <Style.InputWrapper>
            <Style.InputItem
              maxLength="100"
              type="text"
              value={alarmInfo.alarmPrice}
              name="alarmPrice"
              onChange={handleKeywordChange}
              placeholder="이메일"
            />
          </Style.InputWrapper>
          <Style.InputWrapper>
            <Style.InputItem
              maxLength="100"
              type="text"
              value={alarmInfo.keyword}
              name="keyword"
              onChange={handleKeywordChange}
              placeholder="가격"
            />
          </Style.InputWrapper>
          <Style.SelectBox name="keyword">
            {products.map(item => {
              return <option>{item}</option>;
            })}
          </Style.SelectBox>
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
