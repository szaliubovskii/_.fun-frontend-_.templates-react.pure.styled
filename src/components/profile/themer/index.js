import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'components/common'

import { changeTheme } from 'theme/actions'

const Themer = ({ themes, changeThemeAction }) => (
  <div>
    <h1>themes</h1>
    {themes.map(({ name }) => (
      <Button
        isAccent
        isCircular
        key={name}
        onClick={() => changeThemeAction(name)}
      >
        {name}
      </Button>
    ))}
  </div>
)

const mapsStateToProps = ({ theme: { list } }) => ({
  themes: list
})

const mapDispatchToProps = dispatch => ({
  changeThemeAction: name => dispatch(changeTheme(name))
})

export default connect(mapsStateToProps, mapDispatchToProps)(Themer)
