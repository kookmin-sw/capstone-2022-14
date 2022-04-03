import React, { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    invisibleRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [result]);

  return (
    <>
      <Style.Scroll ref={invisibleRef} />
      {result.map(e => (
        <>
          <Style.Result
            key={e._id}
            onClick={() => {
              console.log(e._source.url);
              navigate(e._source.url);
            }}
          >
            {changeMarketName(e._source.market)} - {e._source.title} -
            {e._source.price}
          </Style.Result>
        </>
      ))}
    </>
  );
}

export default SearchResult;
