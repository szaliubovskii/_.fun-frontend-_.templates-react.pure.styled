import Phonebook from './phonebook'
import Profile from './profile'

export const configuration = {
  redirect: '/phonebook'
}

export const routes = [
  {
    name: 'phonebook',
    title: 'phonebook',
    path: '/phonebook',
    component: Phonebook
  },
  {
    name: 'profile',
    title: 'profile',
    path: '/profile',
    component: Profile
  }
]
