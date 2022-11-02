//메모배열 저장

const initialState = {
  memoTitle: '',
  memoText : '',
  memolist:
    [
      {
      }
    ],
}
// 초기 값

export const CHANGE_MEMO_TITLE = (value) => { 
  return {type:'CHANGE_MEMO_TITLE', title:value}
}
export const CHANGE_MEMO_TEXT = (value) => { 
  return {type:'CHANGE_MEMO_TEXT', text:value}
}
export const ADD_MEMO = () => { 
  return {type:'ADD_MEMO'}
}
export const REMOVE_MEMO = (value) => { 
  return {type:'REMOVE_MEMO', payload:value}
}

const memo = (state=initialState, action) => { 
  switch (action.type) { 
    case 'CHANGE_MEMO_TITLE':
      return {
        ...state,
        memoTitle : action.title,
      }
    case 'CHANGE_MEMO_TEXT':
      return {
        ...state,
        memoText : action.text,
      }
    case 'ADD_MEMO':
      if (state.memolist[0].title && state.memoTitle) {
        return {
          ...state,
          memolist: [...state.memolist, {
            id: state.memolist.length,
            title: state.memoTitle,
            text: state.memoText,
          }],
          memoTitle: '',
          memoText : '',
        };
      } else { 
        return {
          ...state,
          memolist: [ {
            id: state.memolist.length-1,
            title: state.memoTitle,
            text: state.memoText,
          }],
          memoTitle: '',
          memoText : '',
        };
      }
    case 'REMOVE_MEMO':
      const temp = state.memolist.filter((item) => {
        return item.id !== action.payload.id
      }).map((item, idx) => {
        return { ...item, id: idx }
      })
      console.log(temp)
      if (temp.length > 0) {
        return {
          ...state,
          memolist: [...temp]
        }
      } else { 
        return {
          ...state,
          memolist: [{}]
        }
      }
    default:
      return state;
  }
}
export default memo;