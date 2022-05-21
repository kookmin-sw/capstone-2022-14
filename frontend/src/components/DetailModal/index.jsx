import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as Style from './styles';
import Carousel from '../Carousel';
import CloseIcon from '@mui/icons-material/Close';

function DetailModal({ detail, onClose }) {
  // detail = {date, desc, images, keyword, market, pictures, pid, price, region, title, url, views}
  const outModal = useRef();
  const [marketBase, setMarketBase] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  useEffect(() => {
    setMarketBase(getMarketBaseURL(detail.market));
    setImages(detail.market === 'Daangn' ? detail.images : detail.pictures);
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

  function Unix_timestamp(t) {
    var date = new Date(t * 1000);
    var year = date.getFullYear();
    var month = '0' + (date.getMonth() + 1);
    var day = '0' + date.getDate();
    var hour = '0' + date.getHours();
    var minute = '0' + date.getMinutes();
    var second = '0' + date.getSeconds();
    return (
      year +
      '-' +
      month.substr(-2) +
      '-' +
      day.substr(-2) +
      ' ' +
      hour.substr(-2) +
      ':' +
      minute.substr(-2) +
      ':' +
      second.substr(-2)
    );
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
        {images ? (
          <Carousel
            title={detail.title}
            marketBase={marketBase}
            images={images}
          />
        ) : null}
        <Style.Main>
          <Style.Title>{detail.title}</Style.Title>
          <Style.InfoWrapper>
            <Style.Price>{detail.price.toLocaleString('ko-KR')}원</Style.Price>
            <Style.UploadDate>{Unix_timestamp(detail.date)}</Style.UploadDate>
            <Style.Region>{detail.region}</Style.Region>
          </Style.InfoWrapper>
          <Style.Desc>{`${detail.desc}`}</Style.Desc>
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
