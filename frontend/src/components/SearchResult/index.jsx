import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as Style from './styles';
import DetailModal from '../DetailModal';

function SearchResult({ result, price, query }) {
  const invisibleRef = useRef();
  const [modalOn, setModalOn] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    invisibleRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [query]);

  function unixTimestamp(t) {
    var date = new Date(t * 1000);
    var year = date.getFullYear();
    var month = '0' + (date.getMonth() + 1);
    var day = '0' + date.getDate();
    var hour = '0' + date.getHours();
    var minute = '0' + date.getMinutes();
    var second = '0' + date.getSeconds();
    return (
      year +
      '-' +
      month.substr(-2) +
      '-' +
      day.substr(-2) +
      ' ' +
      hour.substr(-2) +
      ':' +
      minute.substr(-2) +
      ':' +
      second.substr(-2)
    );
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

  const getThumbnail = source => {
    const thumbnailUrl =
      source.market === 'Daangn'
        ? source.images
          ? source.images[0]
          : null
        : source.pictures
        ? source.pictures[0]
        : null;
    const baseMarket =
      source.market === 'Daangn' ? 'daangn_image' : 'bunjang_image';

    if (thumbnailUrl) return `/api/image/${baseMarket}/${thumbnailUrl}`;
    else return `${process.env.PUBLIC_URL}/images/null_image.png`;
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
                <Style.ResultItem
                  key={e._id}
                  onClick={event => ClickResult(e._source, event)}
                >
                  <Style.ItemImg src={getThumbnail(e._source)} />
                  <Style.Title>{e._source.title}</Style.Title>
                  <Style.Price>
                    {e._source.price.toLocaleString('ko-KR')}원
                  </Style.Price>
                  <Style.Date>{unixTimestamp(e._source.date)}</Style.Date>
                </Style.ResultItem>
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
