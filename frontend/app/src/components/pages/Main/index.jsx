import React, { useState, useCallback } from 'react';
import { Container, Title, Search } from './styles';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  // input keyword state
  const [keyword, setKeyword] = useState('');

  // input 변경 감지
  const handleKeywordChange = useCallback(e => {
    setKeyword(e.target.value);
  }, []);

  const clickSearch = useCallback(() => {
    navigate(`/search/${keyword}`);
    setKeyword('');
  }, [keyword]);

  // 메시지 전송 (enter key)
  const handleEnter = useCallback(
    e => {
      e.key === 'Enter' && clickSearch();
    },
    [clickSearch],
  );

  return (
    <Container>
      <Title>타이틀</Title>
      <Search>
        <input
          maxLength="100"
          type="text"
          value={keyword}
          onChange={handleKeywordChange}
          onKeyUp={handleEnter}
        />
        <button
          onClick={() => {
            clickSearch();
          }}
        >
          Search
        </button>
      </Search>
    </Container>
  );
};

export default Main;
