// Libraries
import styled from 'styled-components';

// Components
import Icon from 'components/Icon';

const StyledLoading = styled(Icon)`
  animation: spin 1s linear infinite,
              color-change 3s linear infinite;  
  text-aling: center;
  font-size: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--primary-color);
  @keyframes spin { 70% { transform:rotate(180deg); } 100% { transform:rotate(360deg); } }
  @keyframes color-change { 
    25% { color: var(--secondary-color); }
    75% { color: var(--terciary-color); }  
  }
`;

export default StyledLoading;
