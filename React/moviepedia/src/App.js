import { useState } from "react";
import ReviewList from "./components/ReviewList";
import items from "./data/mock.json";

function App() {
  const [order, setOrder] = useState('createdAt');
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => {
    setOrder('createdAt')
  }
  const handleBestClick = () => {
    setOrder('rating')
  }

  return (
    <>
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>베스트순</button>
    </div>
    <ReviewList items={sortedItems}/>
    </>
  );
}
export default App;
