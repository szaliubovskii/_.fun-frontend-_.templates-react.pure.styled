import React from 'react'
import styled from 'styled-components'
import { mediaMin } from '_styled'

import NavigationPanel from './panel'
import NavigationContent from './content'

const NavigationGrid = styled.div`
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
`

const Navigation = ({ routes, children }) => (
  <NavigationGrid>
    <NavigationPanel routes={routes}>navigation</NavigationPanel>
    <NavigationContent>{children}</NavigationContent>
  </NavigationGrid>
)

export default Navigation
