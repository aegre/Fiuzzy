import { css } from 'styled-components';
import breakpoints from 'consts/breakpoints';

/**
 * For each breakpoint creates a function that create a media query with
 * containing the provided style
 */
const mediaQueries = Object.entries(breakpoints).reduce(
  (accum, [name, size]) => ({
    ...accum,
    [name]: (...args) => css`
    @media (max-width: ${size}px) {
      ${css(...args)}
    }
    `,
  }), {},
);

export default mediaQueries;
