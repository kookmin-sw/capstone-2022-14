import React, { useState, useEffect, useRef } from 'react';
import * as Style from './styles';
import Modal from './Modal';

function SearchResult({ result }) {
  const invisibleRef = useRef();
  const [modalOn, setModalOn] = useState(false);
  const [detail, setDetail] = useState({});
  const [resultNum, setResultNum] = useState(20);
  const boxRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    invisibleRef.current.scrollIntoView({
      behavior: 'smooth',
    });
    setResultNum(20);
    console.log(result);
  }, [result]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [resultNum]);

  function changeMarketName(name) {
    switch (name) {
      case 'Daangn':
        return '당근마켓';
      case 'Bunjang':
        return '번개장터';
      default:
        return '';
    }
  }

  const ClickResult = (source, e) => {
    setModalOn(!modalOn);
    setDetail(source);
  };

  const intersectionObserver = (entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 관찰하고 있는 entry가 화면에 보여지는 경우
        io.unobserve(entry.target); // entry 관찰 해제
        setResultNum(resultNum + 20); // 데이터 가져오기
      }
    });
  };

  return (
    <>
      <Style.Scroll ref={invisibleRef} />
      <Style.ResultWrapper>
        {result['result'].map((e, index) => {
          return index < resultNum ? (
            <Style.Result
              key={e._id}
              onClick={event => ClickResult(e._source, event)}
              ref={index === resultNum - 1 ? boxRef : null}
            >
              {changeMarketName(e._source.market)} - {e._source.title} -{' '}
              {e._source.price}
            </Style.Result>
          ) : null;
        })}
      </Style.ResultWrapper>
      {modalOn && <Modal detail={detail} onClose={() => setModalOn(false)} />}
    </>
  );
}

export default SearchResult;
