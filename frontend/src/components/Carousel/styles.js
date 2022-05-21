import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
  /* width: 500px;
  height: 500px;
  margin: 0 auto; */
`;

// 슬라이드 CSS
export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 600px;
    height: 500px;
    margin: 0 auto;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #525252;
    opacity: 0.5;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    cursor: pointer;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev:hover:after,
  .slick-next:hover:after {
    color: #000000;
  }
`;

export const CardBox = styled.div``;

export const CardImg = styled.img`
  margin: auto;
  max-width: 600px;
  max-height: 500px;
`;
