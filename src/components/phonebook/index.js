import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid } from './containers'
import Search, { SearchPropTypes } from './search'
import Action, { ActionPropTypes } from './action'
import List, { ListPropTypes } from './list'

import { firstLoadAction, searchAction, clearSearchAction } from './actions'

class Phonebook extends Component {
  componentDidMount() {
    const { firstLoad, firstLoadAction } = this.props
    if (firstLoad) firstLoadAction()
  }

  render() {
    const {
      list,
      search,
      loading,
      searchAction,
      clearSearchAction
    } = this.props

    return (
      <Grid>
        <Search search={search} searchAction={searchAction} />
        <Action clearSearchAction={clearSearchAction} />
        <List list={list} loading={loading} />
      </Grid>
    )
  }
}

Phonebook.propTypes = {
  ...ListPropTypes,
  ...SearchPropTypes,
  ...ActionPropTypes
}

const mapStateToProps = ({
  phonebook: { firstLoad, list, search, loading }
}) => ({
  firstLoad,
  list,
  search,
  loading
})
const mapDispatchToProps = dispatch => ({
  searchAction: searchAction(dispatch),
  clearSearchAction: clearSearchAction(dispatch),
  firstLoadAction: firstLoadAction(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook)
