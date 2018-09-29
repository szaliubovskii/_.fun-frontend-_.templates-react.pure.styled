import React from 'react'
import PropTypes from 'prop-types'
import { FaClose, FaPlus } from 'react-icons/lib/fa'

import { Button } from 'app/common'

import { Box } from './containers'

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

export const ActionPropTypes = {
  clearSearchAction: PropTypes.func.isRequired
}

Action.propTypes = ActionPropTypes

export default Action
