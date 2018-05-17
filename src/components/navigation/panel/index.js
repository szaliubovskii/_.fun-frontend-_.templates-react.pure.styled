import styled from 'styled-components'
import { darken } from 'polished'
import theme from '_theme'

const NavigationPanel = styled.div`
  grid-area: panel;

  color: white;
  background-color: ${({ theme }) => darken(0.05, theme.background)};
  color: ${({ theme }) => theme.color};
`

NavigationPanel.defaultProps = {
  theme
}

export default NavigationPanel
