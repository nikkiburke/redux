import expect from 'expect'
import visibilityFilter from '../../reducers/visibilityFilter'

describe('visibilityFilter reducer', () => {
  let currentState = {
    filter: 'SHOW_MATCHING',
    textMatch: "apple"
  }

  it('should return initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual({
      filter: "SHOW_ALL",
      textMatch: ""
    })
  })

  it('should handle SET_VISIBILITY_FILTER when state is not defined', () => {
    expect(
      visibilityFilter(undefined, {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED',
      })
    ).toEqual({
      filter: 'SHOW_COMPLETED',
      textMatch: ""
    })
  })

  it('should handle SET_VISIBILITY_FILTER of filter or textMatch only', () => {
    expect(
      visibilityFilter(currentState, {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED',
      })
    ).toEqual({
      filter: 'SHOW_COMPLETED',
      textMatch: "apple"
    })

    expect(
      visibilityFilter(currentState, {
        type: 'SET_VISIBILITY_FILTER',
        textMatch: 'banana',
      })
    ).toEqual({
      filter: 'SHOW_MATCHING',
      textMatch: "banana"
    })
  })

  it('calling SET_VISIBILITY_FILTER should return current state if not included in action object', () => {
    expect(
      visibilityFilter(currentState, {
        type: 'SET_VISIBILITY_FILTER'
      })
    ).toEqual({
      filter: 'SHOW_MATCHING',
      textMatch: "apple"
    })

    expect(
      visibilityFilter(currentState, {})
    ).toEqual({
      filter: 'SHOW_MATCHING',
      textMatch: "apple"
    })
  })

})