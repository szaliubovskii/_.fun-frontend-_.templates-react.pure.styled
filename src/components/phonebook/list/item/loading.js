import React from 'react'

import { Block } from 'components/common/loading'
import { Grid, Image, Header, Description } from './containers'

export default () => (
  <Grid>
    <Image />
    <Header>
      <Block isHalfSize />
    </Header>
    <Description>
      <Block />
    </Description>
  </Grid>
)
