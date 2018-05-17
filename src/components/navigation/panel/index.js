import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import theme from 'theme'
import { mediaMin } from 'styled'
import { NavLink } from 'react-router-dom'

import Item from './item'

const Grid = styled.div`
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

const Panel = ({ routes }) => (
  <Grid>
    {routes.map(({ name, path }) => (
      <NavLink key={name} to={path}>
        <Item key={name}>{name}</Item>
      </NavLink>
    ))}
  </Grid>
)

export default Panel
