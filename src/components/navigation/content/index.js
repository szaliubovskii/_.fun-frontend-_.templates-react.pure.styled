import styled from 'styled-components'
import theme from '_theme'

const NavigationContent = styled.div`
  grid-area: content;

  color: white;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`

NavigationContent.defaultProps = {
  theme
}

export default NavigationContent
