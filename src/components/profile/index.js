import React from 'react'
import styled from 'styled-components'

import Themer from './themer'

const Box = styled.div`
  display: flex;
  flex-flow: column;
`

const Profile = () => (
  <Box>
    <h1>profile</h1>
    <Themer />
  </Box>
)

export default Profile
