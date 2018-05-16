import styled from 'styled-components'

const NavigationContent = styled.div`
  grid-area: content;

  color: white;
  background-color: ${({ theme }) => theme.backgroundMain};
`

export default NavigationContent
