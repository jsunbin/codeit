import { useState } from "react";
import FoodList from "./components/FoodList";
import mockItems from "./data/mock.json";

function App() {
  const [items, setItems] = useState(mockItems)
  const [order, setOrder] = useState('createdAt');
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => {
    setOrder('createdAt')
  }

  const handleCalorieClick = () => {
    setOrder('calorie')
  }

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems)
  }
  return (
    <>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete}/>
    </>
  );
}
export default App;
