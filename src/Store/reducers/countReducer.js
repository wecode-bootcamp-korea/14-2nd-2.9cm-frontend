export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREASE':
      return [...state, action.payload];
    case 'DECREASE':
      return [...action.payload];
    default:
      return state;
  }
}
const INITIAL_STATE = [];
