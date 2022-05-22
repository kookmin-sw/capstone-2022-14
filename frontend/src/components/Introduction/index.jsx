import React from 'react';
import * as Style from './styles';

function Introduction() {
  return (
    <Style.BoxWrapper>
      <Style.TextWrapper>
        <Style.MainText>Search your item.</Style.MainText>
        <Style.SubText>애플 중고 매물을 찾고 있으세요?</Style.SubText>
        <br />
        <Style.SubText>
          해당 사이트의 검색기능을 이용하세요. 찾고자 하는 매물만 정확히 골라서
          보여줍니다.
        </Style.SubText>
      </Style.TextWrapper>
      <Style.SvgWrapper w="420">
        <svg width="420" height="420" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
            <stop offset="5%" stopColor="#01E400"></stop>
            <stop offset="25%" stopColor="#FEFF01"></stop>
            <stop offset="40%" stopColor="#FF7E00"></stop>
            <stop offset="60%" stopColor="#FB0300"></stop>
            <stop offset="80%" stopColor="#9B004A"></stop>
            <stop offset="100%" stopColor="#7D0022"></stop>
          </linearGradient>
          <circle
            r="200"
            cx="210"
            cy="210"
            className="external-circle"
            strokeWidth="10"
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
