import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_NEWS_ASYNC} from "../modules/news";
const News = () => {
  const newsList = useSelector((state) => { 
    return state.news.news;
  })
  const isLoading = useSelector((state) => { 
    return state.news.isLoading;
  })
  const dispatch = useDispatch();
  useEffect(() => { dispatch(GET_NEWS_ASYNC()) }, [])
  console.log(newsList)
  return (
    <div>
      <h1>뉴스를 출력할 공간입니다.</h1>
      {newsList ? newsList.map((item, idx) => { 
          return <div><a key={idx} href={item.url} target='_blank'>{item.title}</a></div>
        })
        : isLoading ? <p>로딩 중</p> : null
      }
    </div>
  );
}
 
export default News;