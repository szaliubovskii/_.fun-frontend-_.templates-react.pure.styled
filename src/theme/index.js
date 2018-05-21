const defaultTheme = {
  name: 'default',
  lightenBy: 0.2,

  background: '#fff',
  color: '#000',

  defaultColor: '#e8e8e8',
  defaultCouple: '#000',

  accentColor: '#4885ed',
  accentCouple: '#fff'
}

export const themeDark = {
  ...defaultTheme,

  name: 'dark',

  background: '#444',
  color: '#fff',

  accentColor: '#ffa500',
  accentCouple: '#fff'
}

export const themeLight = {
  ...defaultTheme,

  name: 'light'
}

export const list = [themeLight, themeDark]

export default themeLight
