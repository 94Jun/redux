import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_MEMO_TEXT, ADD_MEMO, CHANGE_MEMO_TITLE } from "../modules/memo";
import MemoList from "./MemoList";

const Memo = () => {
  const memoTitle = useSelector((state) => { 
    return state.memo.memoTitle;
  })
  const memoText = useSelector((state) => { 
    return state.memo.memoText;
  })
  const memolist = useSelector((state) => { 
    return state.memo.memolist;
  })
  const dispatch = useDispatch();

  const onChangeMemoTitle = useCallback((e) => { 
    dispatch(CHANGE_MEMO_TITLE(e.target.value));
  },[dispatch])
  const onChangeMemoText = useCallback((e) => { 
    dispatch(CHANGE_MEMO_TEXT(e.target.value));
  },[dispatch])
  const onClickAddMemo = useCallback(() => { 
    dispatch(ADD_MEMO());
  },[dispatch])

  return (
    <div>
      <h1>메모</h1>
      <div>
        <label htmlFor="title">제목</label>
        <input type='text' onChange={onChangeMemoTitle} value={memoTitle} id='title' />
      </div>
      <div>
        <label htmlFor="text">내용</label>
        <input type='text' onChange={onChangeMemoText} value={memoText} id='text' />
      </div>
      <button onClick={onClickAddMemo}>추가</button>
      <ul>
        {memolist[0].title ? memolist.map((item, idx) => {
          return <MemoList item={item} key={idx+item.title}/>
        }) : null}
      </ul>
    </div>
  );
}
 
export default Memo;