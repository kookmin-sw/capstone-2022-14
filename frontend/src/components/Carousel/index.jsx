import React, { useState } from 'react';
import * as Style from './styles';

function Carousel({ detail }) {
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

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 500,
    autoplaySpeed: 2000, // 넘어가는 속도
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Style.Container>
      <Style.StyledSlider {...settings}>
        {detail?.pictures?.map((source, index) => {
          return (
            <Style.CardBox key={index}>
              <Style.CardImg
                alt={detail.title}
                src={`/api/image/${getMarketBaseURL(detail.market)}/${source}`}
              />
            </Style.CardBox>
          );
        })}
      </Style.StyledSlider>
    </Style.Container>
  );
}

export default Carousel;
