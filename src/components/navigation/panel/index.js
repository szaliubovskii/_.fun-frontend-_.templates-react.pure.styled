import styled from 'styled-components'
import { darken } from 'polished'

const NavigationPanel = styled.div`
  grid-area: panel;

  color: white;
  background-color: ${({ theme }) => darken(0.05, theme.backgroundMain)};
`

export default NavigationPanel
