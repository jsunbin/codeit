import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NewPage from './pages/NewPage';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='new' element={<NewPage/>}/>
          </Route>
        </Routes>

    </BrowserRouter>
  );
}
export default App;
