import FoodList from "./components/FoodList";
import items from "./data/mock.json";

function App() {
  return (
    <div>
      <FoodList items={items}/>
    </div>
  );
}
export default App;
