import { memo } from "react";
import { useDispatch } from "react-redux";
import {REMOVE_MEMO} from "../modules/memo";

const MemoList = memo(({ item }) => {
  const dispatch = useDispatch();
  const onClickRemoveMemo = () => { 
    dispatch(REMOVE_MEMO(item));
  }
  return (
    <li style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
      <h3>{item.id+1}</h3>
      <p>제목 : {item.title}</p>
      <p>내용 : {item.text}</p>
      <button onClick={onClickRemoveMemo}>삭제</button>
    </li>
  );
})
 
export default MemoList;