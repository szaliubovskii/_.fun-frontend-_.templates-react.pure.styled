import { THEME_CHANGE } from './constants'

const changeThemeAction = value => ({
  type: THEME_CHANGE,
  value
})

export const changeTheme = (name, dispatch) => dispatch(changeThemeAction(name))
