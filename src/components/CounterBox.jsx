import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREASE_NUMBER, DECREASE_NUMBER, RESET_NUMBER, CHANGE_NUMBER, INCREASE_NUMBER_ASYNC, DECREASE_NUMBER_ASYNC } from "../modules/counter";

const CounterBox = () => {
  const number = useSelector((state) => { 
    return state.counter.number;
  })
  // useSelector를 통해 state의 원하는 값을 가져옴
  const changeNum = useSelector((state) => { 
    return state.counter.changeNum;
  })

  const dispatch = useDispatch();
  // useDispatch를 통해 사용할 함수를 가져옴

  const onClickNumberInc = useCallback(() => { 
    dispatch(INCREASE_NUMBER());
  },[dispatch])
  // dispatch를 통해 action의 type을 전달해서 사용
  // >> counter의 리듀서 함수로 가서 같은 타입을 찾은 후 실행

  const onClickNumberDec = useCallback(() => { 
    dispatch(DECREASE_NUMBER());
  },[dispatch])
  
  const onChangeNum = useCallback((e) => { 
    dispatch(CHANGE_NUMBER(e.target.value));
  }, [dispatch])
  
  const onClickReset = useCallback(() => { 
    dispatch(RESET_NUMBER());
  }, [dispatch])

  const onClickNumberIncTimer = () => { 
    dispatch(INCREASE_NUMBER_ASYNC(1000));
  }
  const onClickNumberDecTimer = () => { 
    dispatch(DECREASE_NUMBER_ASYNC(2000))
  }

  return (
    <div>
      <h1>카운트입니다</h1>
      <h3>{number}</h3>
      <input type='number' onChange={onChangeNum} value={changeNum} />
      <button onClick={onClickNumberInc}>증가</button>
      <button onClick={onClickNumberIncTimer}>1초 후 증가</button>
      <button onClick={onClickNumberDec}>감소</button>
      <button onClick={onClickNumberDecTimer}>2초 후 감소</button>
      <button onClick={onClickReset}>0</button>
    </div>
  );
}
 
export default CounterBox;