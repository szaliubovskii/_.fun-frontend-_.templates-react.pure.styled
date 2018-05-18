import { API_DATA_LOADED } from './constants'
import { dataLoad } from './api'

const apiDataLoaded = value => ({
  type: API_DATA_LOADED,
  value
})

export const callApiForData = () => dispatch =>
  dataLoad().then(data => dispatch(apiDataLoaded(data)))
