import React from 'react'
import styled from 'styled-components'

import { Button } from 'components/common'

const Box = styled.div`
  grid-area: action;

  display: grid;
  grid-auto-flow: column;
`

const Action = () => (
  <Box>
    <Button isCircular>Clear</Button>
    <Button isCircular isAccent>
      Add
    </Button>
  </Box>
)

export default Action
