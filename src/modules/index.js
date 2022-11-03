//작성한 리덕스 모듈을 하나로 묶어서 사용
import { combineReducers } from "redux";
import counter from "./counter";
import memo from "./memo";
import news from "./news";

export const rootReducer = combineReducers({ counter, memo, news });
// 작성한 리덕스(리듀서 함수)를 객체로 묶어서 export