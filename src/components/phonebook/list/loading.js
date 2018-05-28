import React from 'react'

import LoadingItem from './item/loading'

import { Grid } from './containers'

export default () => <Grid>{[0, 1].map(key => <LoadingItem key={key} />)}</Grid>
