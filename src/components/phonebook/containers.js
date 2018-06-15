import styled from 'styled-components'
import { mediaMin } from 'styled'

export const Grid = styled.div`
  display: grid;

  grid-template:
    'search'
    'action'
    'list';
  grid-gap: 1rem;

  align-items: center;

  ${mediaMin.medium`
    grid-template:
      'search action'
      'list list';
  `};
`
