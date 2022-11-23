import stockReducer, {
  actionCompanyStatemnts, actionFetchStock, actionStockDetail, filterCompany, resetStock,
} from '../redux/stock/stock';
import StockDataMock from '../mocks/StockDataMock';
import StockDetailMock from '../mocks/StockDetailMock';
import StockStatementMock from '../mocks/StockStatementMock';

describe('tests all actions', () => {
  const data = StockDataMock.map(
    ({
      symbol, name, change, price, changesPercentage,
    }) => ({
      symbol,
      change,
      name,
      price,
      changesPercentage,
    }),
  );

  const initialState = {
    stocksData: [],
    details: [],
    statement: [],
    filtered: [],
  };

  const storeData = stockReducer(
    initialState,
    actionFetchStock(data),
  );

  it('loads all active companies', () => {
    expect(storeData.stocksData).toEqual(data);
  });

  it('loads all company details', () => {
    const { details } = stockReducer(
      storeData,
      actionStockDetail(StockDetailMock),
    );
    expect(details.length).toBe(1);
    expect(details[0].companyName).toEqual('Apple Inc.');
  });

  it('loads company statement', () => {
    const { statement } = stockReducer(
      storeData,
      actionCompanyStatemnts(StockStatementMock),
    );
    expect(statement.length).toBe(5);
    expect(statement[0].symbol).toEqual('AAPL');
  });

  it('filter company according to search input', () => {
    const { filtered } = stockReducer(
      storeData,
      filterCompany('Apple'),
    );
    expect(filtered.length).toBe(1);
  });

  it('resets the store data to empty', () => {
    const { details, statement } = stockReducer(
      storeData,
      resetStock(),
    );
    expect(details.length).toEqual(0);
    expect(statement.length).toEqual(0);
  });
});
