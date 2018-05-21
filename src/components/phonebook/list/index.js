import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  grid-area: list;

  display: grid;
`

const List = ({ list }) => (
  <Grid>
    {list.map(item => <div>item</div>)}
    <div>list</div>
  </Grid>
)

export default List
