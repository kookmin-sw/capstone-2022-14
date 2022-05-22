import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './styles';
import AlarmModal from '../AlarmModal';

const Header = () => {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);

  return (
    <Style.Container>
      <Style.HeaderWrapper>
        <Style.HeaderHome onClick={() => navigate('/')}>
          Eaten Apple
        </Style.HeaderHome>
        <Style.HeaderContents>
          <Style.HeaderContent onClick={() => navigate('/')}>
            매물검색
          </Style.HeaderContent>
          <Style.HeaderContent onClick={() => navigate('/pricechart')}>
            가격추이 확인
          </Style.HeaderContent>
          <Style.HeaderContent>인기매물 조회</Style.HeaderContent>
          <Style.HeaderContent onClick={() => setModalOn(true)}>
            알림등록
          </Style.HeaderContent>
        </Style.HeaderContents>
      </Style.HeaderWrapper>
      {modalOn && (
        <AlarmModal
          price={30}
          query={'hello'}
          onClose={() => setModalOn(false)}
        />
      )}
    </Style.Container>
  );
};

export default Header;
