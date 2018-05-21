import React from 'react'
import styled from 'styled-components'
import { Input } from 'components/common'

const Box = styled.div`
  grid-area: search;
`

const Search = () => (
  <Box>
    <Input isStretch placeholder="search..." />
  </Box>
)

export default Search
