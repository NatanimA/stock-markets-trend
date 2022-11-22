import { Routes, Route } from 'react-router-dom';
import StockPage from './components/StockPage';
import StockDetail from './components/StockDetail';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StockPage />} />
      <Route exact path="/details/:symbol" element={<StockDetail />} />
    </Routes>
  );
}

export default App;
