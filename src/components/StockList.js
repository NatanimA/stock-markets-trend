import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStock } from '../redux/stock/stock';
import StockItems from './StockItems';

const StockList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStock());
  }, [dispatch]);

  const state = useSelector((state) => state.stock);
  
  return (
    <section className="stock-list-section">
      {state.map((stockItem) => (<StockItems stock={stockItem} key={stockItem.symbol} />))}

    </section>
  );
};

export default StockList;
