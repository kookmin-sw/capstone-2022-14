import React, { useState, useEffect, useRef } from 'react';
import * as Style from './styles';
import Modal from './Modal';

function SearchResult({ result }) {
  const invisibleRef = useRef();
  const [modalOn, setModalOn] = useState(false);
  const [detail, setDetail] = useState({});

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

  useEffect(() => {
    invisibleRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [result]);

  return (
    <>
      <Style.Scroll ref={invisibleRef} />
      <Style.ResultWrapper>
        {result.map(e => (
          <>
            <Style.Result
              key={e._id}
              onClick={event => ClickResult(e._source, event)}
            >
              {changeMarketName(e._source.market)} - {e._source.title} -
              {e._source.price}
            </Style.Result>
          </>
        ))}
      </Style.ResultWrapper>
      {modalOn && <Modal detail={detail} onClose={() => setModalOn(false)} />}
    </>
  );
}

export default SearchResult;
