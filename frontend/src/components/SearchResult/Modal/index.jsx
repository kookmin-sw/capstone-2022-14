import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as Style from './styles';

function Modal({ detail, onClose }) {
  const outModal = useRef();

  useEffect(() => {
    console.log(detail);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
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
        <Style.Header>매물 상세정보 </Style.Header>
        <Style.Main>
          <Style.Title>{detail.title}</Style.Title>
          <Style.Desc>{detail.desc}</Style.Desc>
          <div>{detail.price}</div>
          <div>{detail.date}</div>
          <div>{detail.region}</div>
          <div>{detail.url}</div>
          <div>{detail.picture}</div>
        </Style.Main>
        <Style.CloseBtn onClick={onClose}>close</Style.CloseBtn>
      </Style.Content>
    </Style.Background>,
    document.getElementById('modal'),
  );
}

export default Modal;
