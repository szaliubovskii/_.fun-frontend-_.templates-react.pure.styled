import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { mediaMin } from 'styled'

import Search from './search'
import Action from './action'
import List from './list'

import { searchAction, clearSearchAction } from './actions'

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

const Phonebook = ({
  list,
  search,
  searchAction,
  clearSearchAction,
  loading
}) => (
  <Grid>
    <Search search={search} searchAction={searchAction} />

    <Action clearSearchAction={clearSearchAction} />

    <List list={list} loading={loading} />
  </Grid>
)

const mapStateToProps = ({ phonebook: { list, search, loading } }) => ({
  list,
  search,
  loading
})
const mapDispatchToProps = dispatch => ({
  searchAction: searchAction(dispatch),
  clearSearchAction: clearSearchAction(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook)
