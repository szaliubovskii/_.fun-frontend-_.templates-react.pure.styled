import React from 'react'
import styled from 'styled-components'
import { Input } from 'components/common'

const Box = styled.div`
  grid-area: search;
`

const handleChange = action => ({ target: { value } }) => action(value)

const Search = ({ search, searchAction }) => (
  <Box>
    <Input
      isStretch
      placeholder="search..."
      value={search}
      onChange={handleChange(searchAction)}
    />
  </Box>
)

export default Search
