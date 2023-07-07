import { useEffect, useState } from "react";
import { getFoods } from "./API/API";
import FoodList from "./components/FoodList";

function App() {
  const [items, setItems] = useState([])
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

  const handleLoad = async () => {
    const { foods } = await getFoods()
    setItems(foods)
  }

  useEffect(() => {
    handleLoad()
  }, [])
  
  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <FoodList items={sortedItems} onDelete={handleDelete}/>
    </>
  );
}
export default App;
