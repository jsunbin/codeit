import ReviewList from "./components/ReviewList";
import items from "./data/mock.json";

function App() {
  return (
    <ReviewList items={items}/>
  );
}
export default App;
