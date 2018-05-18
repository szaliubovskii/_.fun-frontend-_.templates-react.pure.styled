const defaultTheme = {
  name: 'default',
  lightenBy: 0.2,

  background: '#fff',
  color: '#000',
  accent: '#ff8000'
}

export const themeDark = {
  ...defaultTheme,

  name: 'dark',

  background: '#444',
  color: '#fff',
  accent: '#ffa500'
}

export const themeLight = {
  ...defaultTheme,

  name: 'light'
}

export const list = [themeDark, themeLight]

export default themeLight
