import { search, listLoading, listUpdate } from '../actions'
import reducer, { initialState } from '../reducer'

describe('phonebook reducer search', () => {
  const defaultValue = ''
  const value = 'value'

  it('should have default initial state', () => {
    expect(initialState.search).toEqual(defaultValue)
  })

  it('should change state', () => {
    const action = search(value)

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      search: value
    })
  })

  it('should not change state', () => {
    const value = 'value'
    const action = { type: '', value }

    expect(reducer(initialState, action)).toEqual(initialState)
  })
})

describe('phonebook reducer listLoading', () => {
  const defaultValue = false
  const value = true

  it('should have default initial state', () => {
    expect(initialState.loading).toEqual(defaultValue)
  })

  it('should change state', () => {
    const action = listLoading(value)

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: value
    })
  })

  it('should not change state', () => {
    const action = { type: '', value }

    expect(reducer(initialState, action)).toEqual({ ...initialState })
  })
})

describe('phonebook reducer listUpdate', () => {
  const defaultValue = []
  const value = [{ name: 'item' }]

  it('should have default initial state', () => {
    expect(initialState.list).toEqual(defaultValue)
  })

  it('should change state', () => {
    const action = listUpdate(value)

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      list: value
    })
  })

  it('should not change state', () => {
    const action = { type: '', value }

    expect(reducer(initialState, action)).toEqual({ ...initialState })
  })
})
