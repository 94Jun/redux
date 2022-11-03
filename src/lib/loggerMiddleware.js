const loggerMiddleware = (store) => (next) => (action) => { 
  console.group(action && action.type);
  console.log("이전상태", store.getState());
  console.log("액션", action)
  next(action);
  //next()를 통해 액션을 실행해야지만 dispatch가 됨
  
  console.log("다음상태", store.getState());
  console.groupEnd();
}
//store : 리덕스에서 가져온 store(state와 dispatch)
//next : dispatch로 념겨주는 역할
//action : dispatch에서의 action
//logger : 액션의 상태를 남겨주는 역할

export default loggerMiddleware;