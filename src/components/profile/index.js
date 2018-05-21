import React from 'react'
import styled from 'styled-components'

import Themer from './themer'

const Box = styled.div`
  display: flex;
  flex-flow: column;
`

const Profile = () => (
  <Box>
    <Themer />
  </Box>
)

export default Profile
