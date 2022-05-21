import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

// 슬라이드 CSS
export const StyledSlider = styled(Slider)`
  /* .slick-list {
    width: 500px;
    height: 500px;
    margin: 0 auto;
  } */

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }

  .slick-track {
    /* overflow-x: hidden; */
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    position: absolute;
    color: #fff;
    border: 0;
    background: none;
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
    color: #7e7e7e;
  }
`;

export const CardBox = styled.div``;

export const CardImg = styled.img`
  width: 500px;
`;
