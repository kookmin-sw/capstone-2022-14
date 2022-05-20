import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as Style from './styles';
import DetailModal from './DetailModal';

function SearchResult({ result, price }) {
  const invisibleRef = useRef();
  const [modalOn, setModalOn] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    invisibleRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

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

  const getZScore = (original, avg, std) => {
    // z-score = (원래값 - 평균) / 표준편차
    const zscore = (original - avg) / std;
    return zscore;
  };

  const filterFakePrice = (
    lower_threshold,
    upper_threshold,
    price,
    avg,
    std,
  ) => {
    const zscore = getZScore(price, avg, std);
    if (lower_threshold <= zscore && zscore <= upper_threshold) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Style.Scroll ref={invisibleRef} />
      <Style.ResultWrapper>
        {result?.pages.map(page =>
          page?.result.map(e => {
            if (
              filterFakePrice(
                price.lower_threshold,
                price.upper_threshold,
                e._source.price,
                price.avg_price,
                price.std,
              )
            ) {
              return (
                <Style.Result
                  key={e._id}
                  onClick={event => ClickResult(e._source, event)}
                >
                  {changeMarketName(e._source.market)} - {e._source.title} -{' '}
                  {e._source.price}
                </Style.Result>
              );
            }
          }),
        )}
      </Style.ResultWrapper>
      {modalOn && (
        <DetailModal detail={detail} onClose={() => setModalOn(false)} />
      )}
    </>
  );
}

export default SearchResult;
