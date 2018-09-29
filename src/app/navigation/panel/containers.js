import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import theme from 'theme'
import { mediaMin } from 'styled'

export const Grid = styled.div`
  grid-area: panel;

  color: white;
  background-color: ${({ theme: { background } }) => darken(0.05, background)};
  color: ${({ theme: { color } }) => color};

  display: grid;
  grid-auto-flow: column;

  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 1rem;

  text-align: center;

  ${mediaMin.medium`
    grid-auto-flow: row;
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr) );
  `}
};
`

Grid.defaultProps = {
  theme
}

/* eslint-disable */
export const Item = styled.div`
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
