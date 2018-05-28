// NOTE: normally this thing doesn't exist, so don't pay attention to it
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const data = [
  {
    name: 'someone',
    phone: '101010101'
  },
  {
    name: 'someone 2',
    phone: '1010101011'
  }
]

const filteredData = filter =>
  Observable.of(
    data.filter(
      ({ name, phone }) => name.includes(filter) || phone.includes(filter)
    )
  )

export const fakeAjaxGet = url => {
  if (url.startsWith('/api/phonebook/')) {
    const parameter = url.split('/').slice(-1)[0]
    return filteredData(parameter)
  }

  return Observable.of(data)
}
