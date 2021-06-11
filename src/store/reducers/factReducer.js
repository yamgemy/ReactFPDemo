const initState = {fact: ''};

export const factReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DISPLAYAFACT':
      return {...state, fact: action.payload};
    case 'CLEARFACT':
      return {...state, fact: ''};
    default:
      return state;
  }
};
