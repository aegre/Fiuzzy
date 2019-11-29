import styled from 'styled-components';

export const StyledPlaceHolder = styled.span`
  padding: var(--space-300) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    margin: 0;
  }
`;

export const StyledElementCounter = styled.span`
  margin-top: var(--space-300);
  text-align: right;
  font-size: .75rem;
`;

export const StyledListContainer = styled.ul`
  overflow: auto;
  list-style-type: none;
  margin: 0;
  padding: 0;
  magint-top: var(--space-300);
  height: 70vh;
`;
