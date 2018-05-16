import Home from './home'

export const configuration = {
  redirect: '/home'
}

export const routes = [
  {
    name: 'home',
    title: 'home',
    path: '/home',
    component: Home
  }
]
