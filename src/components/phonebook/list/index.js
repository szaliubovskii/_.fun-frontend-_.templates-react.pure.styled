import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from './containers'
import Loading from './loading'
import Empty from './empty'
import Item, { ItemPropType } from './item'

const List = ({ list, loading }) => {
  if (loading) return <Loading />
  if (list.length === 0) return <Empty />

  return <Grid>{list.map(item => <Item key={item.name} {...item} />)}</Grid>
}

export const ListPropTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(ItemPropType)).isRequired
}

List.propTypes = ListPropTypes

export default List
