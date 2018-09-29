import styled from 'styled-components'
import theme from 'theme'

const Content = styled.div`
  grid-area: content;

  color: white;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`

Content.defaultProps = {
  theme
}

export default Content
