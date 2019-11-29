// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaQueries from 'utils/mediaQueries';


const StyledContainer = styled.div`
  max-width: var(--max-app-width);
  margin: auto;
  
  ${mediaQueries.desktop`
    margin: 0 var(--space-600);
  `}

  ${mediaQueries.mobile`
    margin: 0 var(--space-400);
  `}
`;

const Container = ({ className, children }) => (
  <StyledContainer className={className}>
    {children}
  </StyledContainer>
);

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
