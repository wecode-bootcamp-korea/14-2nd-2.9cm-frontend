// import { images } from '../../constants';
export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'DELETE_ITEM':
      return [...action.payload];
    // case "INCREASE":
    // 	return [...state, action.payload];
    // case "DECREASE":
    // 	return [...action.payload];
    default:
      return state;
  }
}
const INITIAL_STATE = [];
