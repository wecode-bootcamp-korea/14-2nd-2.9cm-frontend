export const addCart = item => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};
export const deleteCart = items => {
  return {
    type: 'DELETE_ITEM',
    payload: items,
  };
};
export const increaseCount = count => {
  return {
    type: 'INCREASE',
    payload: count,
  };
};
export const decreaseCount = counts => {
  return {
    type: 'DECREASE',
    payload: counts,
  };
};
