import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as Style from './styles';
import Carousel from '../../Carousel';
import CloseIcon from '@mui/icons-material/Close';

function DetailModal({ detail, onClose }) {
  const outModal = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  function getMarketBaseURL(name) {
    switch (name) {
      case 'Daangn':
        return 'daangn_image';
      case 'Bunjang':
        return 'bunjang_image';
      default:
        return '';
    }
  }

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
        {detail?.pictures.length ? <Carousel detail={detail} /> : null}
        <Style.Main>
          <Style.Title>{detail.title}</Style.Title>
          <Style.Desc>{detail.desc}</Style.Desc>
          <div>{detail.price}</div>
          <div>{detail.date}</div>
          <div>{detail.region}</div>
          <div>{detail.picture}</div>
          <div>{detail.market}</div>
        </Style.Main>
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

export default DetailModal;
