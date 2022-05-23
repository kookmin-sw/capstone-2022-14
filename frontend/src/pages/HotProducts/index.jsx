import React, { useEffect, useState } from 'react';
import * as Style from './styles';
import HotAPI from '../../api/hot';
import SearchAPI from '../../api/search';
import TopViews from '../../components/TopViews';

function HotProducts() {
  const [hotProducts, setHotProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [topViews, setTopViews] = useState([]);

  const search = async () => {
    const search_size = 5;
    const response = await HotAPI.getHotProducts(search_size);
    setHotProducts(response.data);
  };

  const searchRecent = async () => {
    const response = await SearchAPI.searchRecentQuery(page);
    setTopViews(preTopViews => [...preTopViews, response.data.result]);
  };

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    searchRecent();
  }, [page]);

  const conversion = key => {
    let retKeyword = '';
    if (key.includes('MacBook')) {
      retKeyword = 'macbook';
    } else if (key.includes('iPhone')) {
      retKeyword = 'iphone';
    } else if (key.includes('iPad')) {
      retKeyword = 'ipad';
    } else if (key.includes('Series')) {
      retKeyword = 'applewatch';
    } else if (key.includes('AirPods')) {
      retKeyword = 'airpods';
    } else if (key.includes('Mac')) {
      retKeyword = 'mac';
    }
    return retKeyword;
  };

  return (
    <Style.Container>
      <Style.HotTitle>Hot Search</Style.HotTitle>
      <Style.HotSubText>
        해당 사이트에서 많이 검색된 제품들입니다.
      </Style.HotSubText>
      <Style.HotsWrapper>
        {Object.entries(hotProducts).map(([key, value], index) => {
          return (
            <Style.HotWrapper key={index}>
              <Style.HotImg
                src={`${process.env.PUBLIC_URL}/images/${conversion(key)}.png`}
              />
              <Style.HotKeyword>
                {index + 1}. {key}
              </Style.HotKeyword>
            </Style.HotWrapper>
          );
        })}
      </Style.HotsWrapper>
      <Style.TopViewsWrapper>
        <Style.HotTitle>Top Views</Style.HotTitle>
        <Style.HotSubText>
          최근 게시글 중, 조회수가 많은 매물입니다.
        </Style.HotSubText>
        <TopViews result={topViews} />
      </Style.TopViewsWrapper>
      <Style.MoreBtn onClick={() => setPage(page + 1)}>더보기</Style.MoreBtn>
    </Style.Container>
  );
}

export default HotProducts;
