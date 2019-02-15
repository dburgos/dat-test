const defaultState = [];

const list = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return action.list
    default:
      return state
  }
}

export default list
