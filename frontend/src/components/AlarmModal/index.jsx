import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import * as Style from './styles';
import CloseIcon from '@mui/icons-material/Close';
import NotificationAPI from '../../api/notification';

function AlarmModal({ onClose }) {
  const outModal = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const [alarmInfo, setAlarmInfo] = useState({
    email: '',
    price: '',
  });

  const [product, setProduct] = useState('AirPods 1Gen');

  // input 변경 감지
  const handleKeywordChange = e => {
    const { name, value } = e.target;
    setAlarmInfo({ ...alarmInfo, [name]: value });
  };

  const handleProductChange = e => {
    if (e.target.value.includes('AppleWatch')) {
      setProduct(e.target.value.split('AppleWatch ')[1]);
    } else {
      setProduct(e.target.value);
    }
  };

  const products = [
    'AirPods 1Gen',
    'AirPods 2Gen',
    'AirPods 3Gen',
    'AirPods Pro',
    'AirPods Max',
    'AppleWatch Series 1',
    'AppleWatch Series 2',
    'AppleWatch Series 3',
    'AppleWatch Series 4',
    'AppleWatch Series 5',
    'AppleWatch Series 6',
    'AppleWatch Series 7',
    'AppleWatch SE',
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
              value={alarmInfo.email}
              name="email"
              onChange={handleKeywordChange}
              placeholder="이메일"
            />
          </Style.InputWrapper>
          <Style.InputWrapper>
            <Style.InputItem
              maxLength="100"
              type="text"
              value={alarmInfo.price}
              name="price"
              onChange={handleKeywordChange}
              placeholder="가격"
            />
          </Style.InputWrapper>
          <Style.SelectBox name="keyword" onChange={handleProductChange}>
            {products.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </Style.SelectBox>
          <Style.SubmitBtn
            onClick={() => {
              NotificationAPI.notificationSubmit(
                alarmInfo.email,
                alarmInfo.price,
                product,
              )
                .then(() => {
                  alert(product + ' 등록 성공');
                })
                .catch(() => {
                  alert('오류 발생');
                });
            }}
          >
            등록
          </Style.SubmitBtn>
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
