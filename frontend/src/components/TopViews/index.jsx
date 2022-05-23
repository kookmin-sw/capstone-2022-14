import React, { useState } from 'react';
import * as Style from './styles';
import DetailModal from '../DetailModal';

function TopViews({ result }) {
  const [modalOn, setModalOn] = useState(false);
  const [detail, setDetail] = useState({});

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

  const ClickResult = (source, e) => {
    setModalOn(!modalOn);
    setDetail(source);
  };

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

  return (
    <Style.TopViewWrapper>
      {result.map(page => {
        return page.map(e => {
          return (
            <Style.TopViewItem
              key={e._id}
              onClick={event => ClickResult(e._source, event)}
            >
              <Style.ProductImg src={getThumbnail(e._source)} />
              <Style.TextWrapper>
                <Style.TextTitle>{e._source.title}</Style.TextTitle>
                <Style.TextPrice>
                  {e._source.price.toLocaleString('ko-KR')}원
                </Style.TextPrice>
                <Style.TextDateLocale>
                  {e._source.region}, {unixTimestamp(e._source.date)}
                </Style.TextDateLocale>
                <Style.TextDesc>{e._source.desc}</Style.TextDesc>
              </Style.TextWrapper>
            </Style.TopViewItem>
          );
        });
      })}
      {modalOn && (
        <DetailModal detail={detail} onClose={() => setModalOn(false)} />
      )}
    </Style.TopViewWrapper>
  );
}

export default TopViews;
