import React from 'react'
import { NavLink } from 'react-router-dom'

import { Grid, Item } from './containers'

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
