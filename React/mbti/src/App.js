import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='new' element={<HomePage/>}/>
          </Route>
        </Routes>

    </BrowserRouter>
  );
}
export default App;
