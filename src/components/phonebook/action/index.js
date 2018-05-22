import React from 'react'
import styled from 'styled-components'

import { Button } from 'components/common'

const Box = styled.div`
  grid-area: action;

  display: grid;
  grid-auto-flow: column;
`

const Action = ({ clearSearchAction }) => (
  <Box>
    <Button isCircular onClick={clearSearchAction}>
      Clear
    </Button>
    <Button isCircular isAccent>
      Add
    </Button>
  </Box>
)

export default Action
