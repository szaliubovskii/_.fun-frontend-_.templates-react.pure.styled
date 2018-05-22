import React from 'react'
import styled from 'styled-components'

const Box = styled.div``

const Item = ({ id, name, phone }) => (
  <Box>
    {id} {name} {phone}
  </Box>
)

export default Item
