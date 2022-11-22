import StockPage from './components/StockPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<StockPage />} />
      
    </Routes>
  );
}

export default App;
