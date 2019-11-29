// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import StyledLoading from './styled';

const Loading = ({ className }) => (
  <StyledLoading icon="spinner" className={className} />
);

Loading.defaultProps = {
  className: '',
};

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
