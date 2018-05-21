import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { mediaMin } from 'styled'

import Search from './search'
import Action from './action'
import List from './list'

const Grid = styled.div`
  display: grid;

  grid-template: 'search' 'action' 'list';
  grid-gap: 1rem;

  align-items: center;

  ${mediaMin.medium`
    grid-template: 'search action'
                   'list list';
  `};
`

const Phonebook = ({ list }) => (
  <Grid>
    <Search />

    <Action />

    <List list={list} />
  </Grid>
)

const mapToProps = ({ phonebook: { list } }) => ({
  list
})

export default connect(mapToProps)(Phonebook)
