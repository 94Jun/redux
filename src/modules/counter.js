// useReducer의 형식과 유사(초기 값, 리듀서 함수)
// 초기 값
const initialState = {
  number: 0,
  changeNum : 1,
}

export const INCREASE_NUMBER = () => { 
  return { type: 'INCREASE_NUMBER' }; 
}
export const DECREASE_NUMBER = () => { 
  return { type: 'DECREASE_NUMBER' }; 
}
export const RESET_NUMBER = () => { 
  return { type: 'RESET_NUMBER' };
}
//action 객체의 type의 함수로 만들어 export
//필요한 곳에서 import하여 사용
//redux toolkit에서는 자동으로 함수로 만들어 줌

export const CHANGE_NUMBER = (value) => { 
  return { type: 'CHANGE_NUMBER', payload : value };
}
//type 외의 값을 전달하는 경우 매개변수 이용


// 리듀서 함수
export const counter = (state = initialState, action) => { 
  switch (action.type) { 
    case 'INCREASE_NUMBER':
      return {
        ...state,
        number: Number(state.number + state.changeNum),
        changeNum: '',
      };
    case 'DECREASE_NUMBER':
      return {
        ...state,
        number: Number(state.number - state.changeNum),
        changeNum: '',
      };
    case 'RESET_NUMBER':
      return { ...state,
        number: 0,
        changeNum: '',
      };
    case 'CHANGE_NUMBER':
      return {
        ...state,
        changeNum: Number(action.payload),
      };
    default:
      return state;
  }
}
export default counter;