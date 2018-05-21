import React from 'react'
import styled from 'styled-components'
import { mediaMin } from 'styled'

import Panel from './panel'
import Content from './content'

const Grid = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template:
    'panel'
    'content';

  grid-template-rows: 50px 1fr;

  ${mediaMin.medium`
    grid-template: 'panel content';
    grid-template-columns: 100px 1fr;
  `};

  ${Content} {
    padding: 1rem 1rem 0 1rem;
  }
`

const Navigation = ({ routes, children }) => (
  <Grid>
    <Panel routes={routes}>navigation</Panel>
    <Content>{children}</Content>
  </Grid>
)

export default Navigation
