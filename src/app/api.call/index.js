import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Loading from './loading'
import { callApiForData } from './actions'

const Box = styled.div`
  display: flex;
  flex-flow: column;
`
class ApiCall extends Component {
  componentDidMount() {
    const { loaded, callApiForDataAction } = this.props

    if (loaded) return

    callApiForDataAction()
  }

  render() {
    const { list, loaded } = this.props

    if (!loaded) return <Loading />
    return <Box>{list.map(item => <div key={item}>{item}</div>)}</Box>
  }
}

const mapsStateToProps = ({ api: { list, loaded } }) => ({
  list,
  loaded
})

const mapDispatchToProps = dispatch => ({
  callApiForDataAction: () => dispatch(callApiForData())
})

export default connect(mapsStateToProps, mapDispatchToProps)(ApiCall)
