// Libraries
import styled from 'styled-components';

// Components
import StyledIcon from 'components/Icon/styled';

export const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  outline: none;
  
`;

export const StyledSearchInputContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  box-sizing: border-box;
  padding: var(--space-200);
  align-items: center;
  border-radius: 8px;

  ${StyledIcon} {
    height: auto;
    padding-right: var(--space-200);
  }

  
  :focus-within {
    box-shadow: 3px 3px 3px var(--primary-color);
    ${StyledIcon} {
      color: var(--primary-color);
    }
    
  }
`;
