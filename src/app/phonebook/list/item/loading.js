import React from 'react'

import { Block } from 'app/common/loading'
import { Grid, Image, Header, Description, DummyImage } from './containers'

export default () => (
  <Grid>
    <Image>
      <DummyImage />
    </Image>
    <Header>
      <Block isHalfSize />
    </Header>
    <Description>
      <Block />
    </Description>
  </Grid>
)
