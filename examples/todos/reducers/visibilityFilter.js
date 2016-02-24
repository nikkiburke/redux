const defaultState = {
  filter: "SHOW_ALL",
  textMatch: ""
};

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        filter: action.filter ? action.filter : state.filter,
        textMatch: (action.textMatch !== undefined) ? action.textMatch : state.textMatch
      }
    default:
      return state
  }
}

export default visibilityFilter
