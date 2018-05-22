import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Grid = styled.div`
  grid-area: list;

  display: grid;
`

const List = ({ list }) => (
  <Grid>{list.map(item => <Item key={item.id} item={item} />)}</Grid>
)

export default List
