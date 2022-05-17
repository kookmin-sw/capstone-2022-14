import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Container } from './styles';

const override = css`
  display: block;
  margin: 0.5rem auto;
`;

/**
 *
 * @component
 * @category atoms
 */

const LoadingSign = ({ loading, color = '#ff5a5e', size = 20 }) => {
  return (
    <Container>
      <BeatLoader color={color} loading={loading} size={size} css={override} />
    </Container>
  );
};

LoadingSign.propTypes = {
  /** loading 여부 */
  loading: PropTypes.bool.isRequired,
  /** loading sign의 색깔 */
  color: PropTypes.string,
  /** loading sign의 크기 */
  size: PropTypes.number,
};

export default LoadingSign;
