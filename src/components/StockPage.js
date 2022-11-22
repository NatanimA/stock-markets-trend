import StockList from './StockList';
import StockHeader from './StockHeader';
import NavBar from './NavBar';

const StockPage = () => (
  <main className="stock-container-all">
    <NavBar />
    <StockHeader />
    <StockList />
  </main>
);

export default StockPage;
