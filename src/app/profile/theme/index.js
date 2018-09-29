import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'app/common'

import { changeTheme } from './actions'

const Theme = ({ list, changeThemeAction }) => (
  <div>
    <h1>themes</h1>
    {list.map(({ name }) => (
      <Button
        isAccent
        isCircular
        isHollow
        key={name}
        onClick={() => changeThemeAction(name)}
      >
        {name}
      </Button>
    ))}
  </div>
)

const mapsStateToProps = ({ theme: { list } }) => ({
  list
})

const mapDispatchToProps = dispatch => ({
  changeThemeAction: name => dispatch(changeTheme(name))
})

export default connect(mapsStateToProps, mapDispatchToProps)(Theme)
