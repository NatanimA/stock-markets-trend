import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StockPage from '../components/StockPage';
import store from '../redux/configureStore';
import StockList from '../components/StockList';
import StockDetail from '../components/StockDetail';
import StockHeader from '../components/StockHeader';

describe('Should render statefull components', () => {
  it('Should render main page', () => {
    <Provider store={store}>
      <BrowserRouter>
        <StockPage />
      </BrowserRouter>
    </Provider>;
  });

  it('Should render List Page, ', () => {
    <Provider store={store}>
      <BrowserRouter>
        <StockList />
      </BrowserRouter>
    </Provider>;
  });

  it('Should render Detail Page, ', () => {
    <Provider store={store}>
      <BrowserRouter>
        <StockDetail />
      </BrowserRouter>
    </Provider>;
  });

  it('Should render Header ', () => {
    <Provider store={store}>
      <BrowserRouter>
        <StockHeader />
      </BrowserRouter>
    </Provider>;
  });
});
