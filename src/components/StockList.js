import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchStock } from '../redux/stock/stock';
import StockItems from './StockItems';

const StockList = () => {
  const state = useSelector((state) => state.stock.stocksData);

  // const filteredState = useSelector(
  //   (state) => state.stock.filtered,
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStock());
  }, []);

  return (
    <Container>
      <section className="stock-list-section">
        {state.map((stockItem) => (<StockItems stock={stockItem} key={stockItem.symbol} />))}
      </section>
    </Container>

  );
};

export default StockList;
