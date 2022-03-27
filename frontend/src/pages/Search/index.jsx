import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { keyword } = useParams();

  return <div>{keyword} 검색 결과</div>;
};

export default Search;
