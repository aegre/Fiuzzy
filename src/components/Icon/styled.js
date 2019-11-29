import styled, { css } from 'styled-components';

const StyledIcon = styled.i`
 ${(props) => (props.color ? css`color: ${props.color}` : '')}
`;

export default StyledIcon;
