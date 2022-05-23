import styled from 'styled-components';

export const TopViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
`;

export const TopViewItem = styled.div`
  display: flex;
  max-width: 1200px;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.25rem rgb(0 0 0 / 8%);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
`;

export const TextTitle = styled.div`
  font-size: 1.5rem;
`;

export const TextPrice = styled.div`
  font-weight: bold;
`;

export const TextDateLocale = styled.div`
  font-size: 1rem;
  color: #999999;
`;

export const TextDesc = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 1px;
  max-height: 80px;
  max-width: 995px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 0.8rem;
`;
