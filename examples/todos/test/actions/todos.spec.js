import expect from 'expect'
import * as actions from '../../actions'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action with filter key', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toogleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  describe('filterByInput', () => {
    it ('should create SET_VISIBILITY_FILTER action with textMatch key', () => {
      const text = "hello";
      expect(actions.filterByInput(text)).toEqual({
        type: 'SET_VISIBILITY_FILTER',
        textMatch: text
      })
    })

    it('should accept an empty string', () => {
      expect(actions.filterByInput('')).toEqual({
        type: 'SET_VISIBILITY_FILTER',
        textMatch: ''
      })
    })
  })
})
