import React from 'react'
import PropTypes from 'prop-types'

import { Box } from './containers'
import { Input } from 'components/common'

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

export const SearchPropTypes = {
  search: PropTypes.string,
  searchAction: PropTypes.func.isRequired
}

Search.propTypes = SearchPropTypes

export default Search
