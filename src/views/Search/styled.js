import styled from 'styled-components';
import mediaQueries from 'utils/mediaQueries';

const StyledSearchView = styled.section`
  display: flex;
  width: 100%;
  justify-items: center;
  flex-direction: column;
  margin-top: var(--space-900);

  ${mediaQueries.desktop`
    margin-top: var(--space-600);
  `}
`;

export default StyledSearchView;
