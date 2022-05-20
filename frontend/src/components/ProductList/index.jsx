import React, { useState } from 'react';
import * as Style from './styles';
import { productSub } from './product';
import LoadingSign from '../LoadingSign';
import SearchAPI from '../../api/search';
import SearchResult from '../SearchResult';
import PriceChart from '../PriceChart';
import useSearchQuery from '../../query/useSearchQuery';
import { useInView } from 'react-intersection-observer';

function ProductList({ keyword }) {
  const [price, setPrice] = useState(null);
  const [curQuery, setCurQuery] = useState('');
  const [isClicked, setIsClicked] = useState('');
  const [item, setItem] = useState('');

  const itemCount = 100;

  const search = async query => {
    const response = await SearchAPI.searchPriceQuery(query, itemCount);
    setPrice(response.data);
    setCurQuery(query);
    if (response.data.length === 0) alert('매물이 없습니다.');
  };

  const { data, isLoading, isError, fetchNextPage, isFetching, hasNextPage } =
    useSearchQuery(item);

  const { ref, inView, entry } = useInView({
    threshold: 0.7,
  });

  // observer가 보이면 다음 페이지 fetching
  if (inView && !isFetching && hasNextPage) {
    fetchNextPage();
  }

  if (isLoading || isError) {
    return (
      <Style.Container>
        {productSub[keyword].map((item, i) => (
          <Style.ItemBtn
            isClicked={isClicked === item ? true : false}
            key={i}
            onClick={() => {
              search(item);
              setIsClicked(item);
              setItem(item);
            }}
          >
            {item}
          </Style.ItemBtn>
        ))}
      </Style.Container>
    );
  }

  if (data) {
    return (
      <>
        <Style.Container>
          <Style.ItemWrapper>
            {productSub[keyword].map((item, i) => (
              <Style.ItemBtn
                isClicked={isClicked === item ? true : false}
                key={i}
                onClick={() => {
                  search(item);
                  setIsClicked(item);
                  setItem(item);
                }}
              >
                {item}
              </Style.ItemBtn>
            ))}
          </Style.ItemWrapper>
          {price ? <PriceChart result={price} query={curQuery} /> : null}
          {price ? <SearchResult result={data} price={price} /> : null}
          <Style.Observer ref={ref}>
            <LoadingSign loading={isLoading} />
          </Style.Observer>
        </Style.Container>
      </>
    );
  }
}

export default ProductList;
