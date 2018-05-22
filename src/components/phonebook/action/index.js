import React from 'react'
import styled from 'styled-components'
import { FaClose, FaPlus } from 'react-icons/lib/fa'

import { Button } from 'components/common'

const Box = styled.div`
  grid-area: action;

  display: grid;
  grid-auto-flow: column;
`

const Action = ({ clearSearchAction }) => (
  <Box>
    <Button isCircular onClick={clearSearchAction}>
      <FaClose />
    </Button>
    <Button isCircular isAccent>
      <FaPlus /> Add
    </Button>
  </Box>
)

export default Action
