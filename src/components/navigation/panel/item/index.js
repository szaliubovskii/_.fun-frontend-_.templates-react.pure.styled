import styled, { css } from 'styled-components'
import { lighten } from 'polished'

/* eslint-disable */
const Item = styled.div`
  padding: 1rem;

  ${({ theme: { color, accentColor, lightenBy } }) => css`
    color: ${color};
    text-decoration: none;

    &:hover {
      color: ${accentColor};
    }

    &:active {
      text-decoration: none;
      color: ${lighten(lightenBy, accentColor)};
    }

    .active & {
      font-size: 1.1em;
      color: ${accentColor};
    }
  `}
`
/* eslint-enable */

export default Item
