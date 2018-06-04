import React from 'react'
import { connect } from 'react-redux'

import { Grid } from './containers'
import Search, { SearchPropTypes } from './search'
import Action, { ActionPropTypes } from './action'
import List, { ListPropTypes } from './list'

import { searchAction, clearSearchAction } from './actions'

const Phonebook = ({
  list,
  search,
  loading,
  searchAction,
  clearSearchAction
}) => (
  <Grid>
    <Search search={search} searchAction={searchAction} />
    <Action clearSearchAction={clearSearchAction} />
    <List list={list} loading={loading} />
  </Grid>
)

Phonebook.propTypes = {
  ...ListPropTypes,
  ...SearchPropTypes,
  ...ActionPropTypes
}

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
