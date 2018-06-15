import { ActionsObservable, Observable } from 'redux-observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/toArray'

import { search, listLoading, listUpdate } from '../actions'
import { filterLoadingStart, filterLoadingEnd, filterChange } from '../epic'

describe('filterLoadingStart Epic', () => {
  it('dispatches the correct actions when it is successful', done => {
    const action = ActionsObservable.of(search(''))
    const expectedOutput = listLoading(true)

    filterLoadingStart(action)
      .toArray()
      .subscribe(actualOutput => {
        expect.deepEqual(actualOutput, expectedOutput)
        done()
      })
  })
})

describe('filterLoadingEnd Epic', () => {
  it('dispatches the correct actions when it is successful', done => {
    const action = ActionsObservable.of(listUpdate([]))
    const expectedOutput = listLoading(false)

    filterLoadingEnd(action)
      .toArray()
      .subscribe(actualOutput => {
        expect.deepEqual(actualOutput, expectedOutput)
        done()
      })
  })
})

describe('filterChange Epic', () => {
  let originalTimeout = 0

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1200 // we have delay in request
  })

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
  })

  it('dispatches the correct actions when it is successful', done => {
    const action = ActionsObservable.of(filter(''))
    const expectedOutput = { name: 'api result' }
    const get = url => Observable.of(expectedOutput)

    filterChange(action, null, { get })
      .toArray()
      .subscribe(actualOutput => {
        expect.deepEqual(actualOutput, expectedOutput)
        done()
      })
  })
})
