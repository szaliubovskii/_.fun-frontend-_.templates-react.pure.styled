import Phonebook from 'components/phonebook'
import Profile from 'components/profile'

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
