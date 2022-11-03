import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import loggerMiddleware from "./lib/loggerMiddleware";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
//store를 만들기 위한 createStore(redux) * redux toolkit에 더 나은 방법 존재
//applyMiddleware를 통해 미들웨어 추가 가능

import { counter } from './modules/counter';
//store에 추가할 counter state와 action
import { rootReducer } from './modules';
//rootReducer를 통해 리듀서들을 한번에 묶어서 사용

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// createStore를 이용하여 store 생성
//라이브러리를 통한 미들웨어 사용

const store2 = createStore(rootReducer, applyMiddleware(loggerMiddleware));
//미들웨어를 직접 만들어 사용


// redux 과정
// 1. store 생성
//   1-1. modules 폴더에 스테이트의 초기 값 및 리듀서 함수 선언
//   1-2. createStore(리듀서 함수)를 통해 store생성
// 2. <Provider store={store}> 를 통해 원하는 컴포넌트 및
//    하위 컴포넌트에서 리듀서 함수 사용 가능
// 3. 컴포넌트에서 사용 방법
//   3-1. useSelector를 통해 사용할 스테이트 받아옴
//   3-2. useDispatch를 통해 dispatch 함수 사용 가능



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
