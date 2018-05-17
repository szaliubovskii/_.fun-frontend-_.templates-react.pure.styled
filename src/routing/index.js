import Home from 'components/home'
import Profile from 'components/profile'

export const configuration = {
  redirect: '/home'
}

export const routes = [
  {
    name: 'home',
    title: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'profile',
    title: 'profile',
    path: '/profile',
    component: Profile
  }
]
