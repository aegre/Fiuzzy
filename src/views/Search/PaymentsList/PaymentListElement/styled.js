import styled from 'styled-components';

export const StyledAmount = styled.div`
  display: flex;
  align-items: center;
  border-radius-left: 40px;
  h1 {
    color: var(--terciary-color);
    font-size: 1.75rem;
  }
`;

export const StyledInfoSection = styled.div`
  display: flex;
  flex-direction: column;

  h2 { 
    margin-bottom: auto;
    color: var(--primary-color); 
  }
`;

export const StyledPaymentElement = styled.ul`
  height: 120px;
  margin: var(--space-400) 0;
  background-color: #1f222a;
  padding: var(--space-400);
  box-sizing: border-box;
  overflow: visible;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  border-left: 3px solid var(--primary-color);
  border-right: 3px solid var(--terciary-color);
`;
