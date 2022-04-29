import React, { useState, useEffect, useRef } from 'react';
import Detail from './detail';
import * as Style from './styles';
import { useNavigate } from 'react-router-dom';

function SearchResult({ result }) {
  // console.log(result);
  const navigate = useNavigate();
  const invisibleRef = useRef();

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
    // if(e.target.nextSibling.nodeName === '')
    const a = document.createElement('div');
    a.innerHTML = source.desc;
    e.target.append(a);
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
    </>
  );
}

export default SearchResult;
