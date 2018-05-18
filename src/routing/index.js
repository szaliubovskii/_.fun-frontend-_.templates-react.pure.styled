import Home from 'components/home'
import Profile from 'components/profile'
import ApiCall from 'components/api.call'

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
  },
  {
    name: 'api',
    title: 'api',
    path: '/api.call',
    component: ApiCall
  }
]
