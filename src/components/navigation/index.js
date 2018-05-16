import React from 'react'
import styled from 'styled-components'

import NavigationPanel from './panel'
import NavigationContent from './content'

const theme = {
  backgroundMain: '#444'
}

const NavigationGrid = styled.div`
  height: 100vh;

  display: grid;
  grid-template:
    'panel'
    'content';

  grid-template-rows: 50px 1fr;

  @media (min-width: 700px) {
    grid-template: 'panel content';
    grid-template-columns: 100px 1fr;
  }
`

const Navigation = ({ children }) => (
  <NavigationGrid>
    <NavigationPanel theme={theme}>navigation</NavigationPanel>
    <NavigationContent theme={theme}>{children}</NavigationContent>
  </NavigationGrid>
)

export default Navigation
