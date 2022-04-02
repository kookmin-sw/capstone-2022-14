import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Container, HeaderWrapper, Title } from './styles';

const Header = () => {
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
      <HeaderWrapper>
        <Title>
          <Link to="/">중고킹</Link>
        </Title>
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
        <Title></Title>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
