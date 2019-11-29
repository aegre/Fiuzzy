// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import StyledIcon from './styled';


const Icon = ({ className, icon, color }) => (
  <StyledIcon
    className={classNames(`fa fa-${icon}`, className)}
    color={color}
    role="img"
    aria-label={icon}
  />
);

Icon.defaultProps = {
  color: '',
  className: '',
};

Icon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Icon;
