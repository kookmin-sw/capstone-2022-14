import React from 'react';
import * as Style from './styles';

function Introduction() {
  return (
    <Style.BoxWrapper>
      <Style.TextWrapper>
        <Style.MainText>Search your item.</Style.MainText>
        <Style.SubText>
          찾고자 하는 매물만 정확히 골라서 보여줍니다.
        </Style.SubText>
      </Style.TextWrapper>
      <Style.SvgWrapper w="420">
        <svg width="420" height="420" xmlns="http://www.w3.org/2000/svg">
          {/* <defs>
          <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00a2ff" />
            <stop offset="100%" stop-color="#004d80" />
          </linearGradient>
        </defs>
        <circle fill="url(#circleGradient)" cx="186" cy="186" r="186"></circle> */}
          <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
            <stop offset="5%" stop-color="#01E400"></stop>
            <stop offset="25%" stop-color="#FEFF01"></stop>
            <stop offset="40%" stop-color="#FF7E00"></stop>
            <stop offset="60%" stop-color="#FB0300"></stop>
            <stop offset="80%" stop-color="#9B004A"></stop>
            <stop offset="100%" stop-color="#7D0022"></stop>
          </linearGradient>
          <circle
            r="200"
            cx="210"
            cy="210"
            class="external-circle"
            stroke-width="10"
            fill="none"
            stroke="url(#linearColors)"
          ></circle>
          <image
            x="30"
            y="30"
            width="100"
            href={`${process.env.PUBLIC_URL}/images/introduceIphone.png`}
          />
          <image
            x="250"
            y="300"
            width="150"
            href={`${process.env.PUBLIC_URL}/images/introduceMacbook.png`}
          />
          <image
            x="250"
            y="0"
            width="175"
            href={`${process.env.PUBLIC_URL}/images/introduceWatch.png`}
          />
        </svg>
      </Style.SvgWrapper>
    </Style.BoxWrapper>
  );
}

export default Introduction;
