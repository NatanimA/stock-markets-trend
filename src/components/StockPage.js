import StockList from './StockList';
import StockHeader from './StockHeader';
import NavBar from './NavBar';
import Footer from './Footer';

const StockPage = () => (
  <main className="stock-container-all">
    <NavBar />
    <StockHeader />
    <StockList />
    <Footer />
  </main>
);

export default StockPage;
