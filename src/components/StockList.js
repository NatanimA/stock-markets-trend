import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchStock } from '../redux/stock/stock';
import StockItems from './StockItems';
import Search from './Search';

const StockList = () => {
  const state = useSelector((state) => state.stock.stocksData);

  const filteredState = useSelector(
    (state) => state.stock.filtered,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if(filteredState.length < 1){
      dispatch(fetchStock());
    }
  }, [dispatch,filteredState.length]);

  return (
    <Container>
      <Search />
      <section className="stock-list-section">
        {filteredState.length === 0 ? state.map((stockItem) => (<StockItems stock={stockItem} key={stockItem.symbol} />)):
          filteredState.map((stockItem) => (<StockItems stock={stockItem} key={stockItem.symbol} />))
        }
      </section>
    </Container>

  );
};

export default StockList;
