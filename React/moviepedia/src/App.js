import { useState, useEffect } from "react";
import { createReviews, deleteReview, getReviews, updateReview } from "./API/API";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState('createdAt');
  const [offset, setOffset] = useState(0)
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => {
    setOrder('createdAt')
  }
  const handleBestClick = () => {
    setOrder('rating')
  }

  const handleDelete = async (id) => {
    const result = await deleteReview(id);
    if(!result) return;
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;   
    } finally {
      setIsLoading(false)
    }
    const { reviews, paging } = result;

    if (options.offset === 0) {
      setItems(reviews)
      
    } else {
      setItems((prev) => [...prev,...reviews])
    }

    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext)
  }

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT })
  }

  const handleCreateSuccess =  (review) => {
    setItems(prevItems => [review, ...prevItems]);
  }

  const handleUpdateSucess = (review) => {
    // prevItems State 배열에서 같은 아이디에 해당하는 리뷰를 찾아서 업데이트
    setItems(prevItems => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id)
      return [...prevItems.slice(0, splitIdx), review, ...prevItems.slice(splitIdx+1)]
      })
    }
  

  useEffect(() => {
    handleLoad({order, offset: 0, limit: LIMIT})
  }, [order])
  

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm onSubmit={createReviews} onSubmitSuccess={handleCreateSuccess}/>
      <ReviewList items={sortedItems} onDelete={handleDelete} onUpdate={updateReview} onUpdateSuccess={handleUpdateSucess}/>
      {hasNext && <button disabled={isLoading} onClick={handleLoadMore}>더보기</button>}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
  }
export default App;
