export const START_LOAD = () => { 
  return { type: 'START_LOAD' };
}
export const END_LOAD = () => { 
  return { type: 'END_LOAD' };
}
export const GET_NEWS = (value) => { 
  return { type: 'GET_NEWS', payload : value };
}

export const GET_NEWS_ASYNC = () => async (dispatch) => { 
  dispatch(START_LOAD());
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=98ba546cf6ea40f794600de83ed452ef');
  const body = await response.json();
  if (body.status === 'ok') {
    dispatch(GET_NEWS(body.articles))
  } else { 
    console.log('로딩 실패');
  }
  dispatch(END_LOAD());
}
//thunk를 통해 값을 받아오는 액션함수
//async를 통해 비동기 함수임을 알림


const initialState = {
    isLoading: false,
    news : null
}

const news = (state=initialState, action) => { 
  switch (action.type) { 
    case 'GET_NEWS':
      return {
        ...state,
        news : action.payload
      }
    case 'START_LOAD':
      return {
        ...state,
        isLoading : true,
      }
    case 'END_LOAD':
      return {
        ...state,
        isLoading : false,
      }
    default:
      return state
  }
}

export default news;