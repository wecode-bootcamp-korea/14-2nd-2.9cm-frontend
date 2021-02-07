// 액션생성함수 설정
// 카트 넣는 액션, 카트 빼는 액션
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
