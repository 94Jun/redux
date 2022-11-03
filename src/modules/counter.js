// useReducer의 형식과 유사(초기 값, 리듀서 함수)

import { useEffect } from "react";

const initialState = {
  number: 0,
  changeNum : 1,
}
// 초기 값


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





export const INCREASE_NUMBER_ASYNC = (timer) => (dispatch) => { 
  //dispatch를 실행하기 전 진행할 내용 작성
  //dispatch를 통해 액션 실행(액션은 매개변수로 받지 않았기 때문에 객체로 직접 입력하거나 만들어져있는 액션 함수를 사용)
  setTimeout(() => { dispatch(INCREASE_NUMBER()) }, timer);
}
//thunk를 사용하여 비동기로 실행하는 액션 함수 생성 가능
//thunk의 형식을 사용했기 때문에, 바로 dipatch를 사용하는게 아니라 나중에 추가해서 사용 가능
//thunk 사용 형태 : export const 함수이름 = () => (dispatch) => {}

export const DECREASE_NUMBER_ASYNC = (timer) => (dispatch) => { 
  setTimeout(() => { dispatch(DECREASE_NUMBER()) }, timer);
}







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