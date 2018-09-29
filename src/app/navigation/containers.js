import styled from 'styled-components'
import { mediaMin } from 'styled'

import Content from './content'

export const Grid = styled.div`
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
