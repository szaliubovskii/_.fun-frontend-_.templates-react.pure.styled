import React from 'react'

import { Grid } from './containers'
import Panel from './panel'
import Content from './content'

const Navigation = ({ routes, children }) => (
  <Grid>
    <Panel routes={routes}>navigation</Panel>
    <Content>{children}</Content>
  </Grid>
)

export default Navigation
