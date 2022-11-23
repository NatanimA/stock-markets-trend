import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Navbar, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import StockPage from './StockPage';
import { fetchStockDetails, fetchCompanyStatements, resetStock } from '../redux/stock/stock';

const StockDetail = () => {
  const dispatch = useDispatch();
  const stockDetailState = useSelector((state) => state.stock.details);
  const companyStatementState = useSelector((state) => state.stock.statement);
  const { symbol } = useParams();
  useEffect(() => {
    dispatch(fetchCompanyStatements(symbol));
    dispatch(fetchStockDetails(symbol));
  }, [dispatch, symbol]);
  const clickHandler = () => {
    dispatch(resetStock());
  };
  if (stockDetailState.length === 0 || companyStatementState.length === 0) {
    return (
      <StockPage />
    );
  }
  return (
    <>
      <header>
        <Container>
          <Navbar expand="lg" variant="dark">
            <Container>
              <Link to="/" onClick={clickHandler}>
                <div className="display-6 text-white">
                  <BsArrowLeftSquareFill />
                </div>
              </Link>
              <h2>
                <Navbar.Brand href="#" className="text-white">
                  Company Details
                </Navbar.Brand>
              </h2>
            </Container>
          </Navbar>
        </Container>
      </header>
      <section className="company-details-section">
        {stockDetailState.map(
          ({
            companyName,
            ceo,
            description,
            industry,
            country,
            city,
            image,
            currency,
            website,
            volAvg: volatility,
          }) => (
            <Container key={symbol} className="my-4">
              <div className="details-container flex">
                <div className="image-container flex">
                  <div>
                    <img src={image} alt="company" />
                  </div>
                  <div className="fs-4">
                    <span className="d-block fw-bold">
                      Country:&nbsp;
                      {country}
                    </span>
                    <span className="d-block fw-bold">
                      City:&nbsp;
                      {city}
                    </span>
                    <span className="d-block fw-bold">
                      Currency:&nbsp;
                      {currency}
                    </span>
                  </div>
                </div>
                <div className="company-details flex">
                  <h2 className="fs-1 mb-4">{companyName}</h2>
                  <span className="fw-bold mb-4 fs-3">
                    CEO:&nbsp;
                    {ceo}
                  </span>
                  <span className="fw-bold mb-4 fs-3">Description:</span>
                  <p>{description}</p>
                  <span className="fw-bold mb-4 fs-3">
                    Industry:&nbsp;
                    <span>{industry}</span>
                  </span>
                  <span className="fw-bold mb-4 fs-3">
                    Website:&nbsp;
                    <a href={website} target="_blank" rel="noreferrer">
                      Visit website
                    </a>
                  </span>
                  <span className="fw-bold mb-4 fs-3">
                    Stock volatility:&nbsp;
                    <span>{volatility}</span>
                  </span>
                </div>
              </div>
            </Container>
          ),
        )}
      </section>
      <section className="statements-section m-4">
        <Container>
          <h2 className="text-center">Financial statements report</h2>
          <Container>
            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>Reported Year</th>
                  <th>Income statement</th>
                </tr>
              </thead>
              <tbody>
                {companyStatementState.map(
                  ({
                    revenue,
                    grossProfit,
                    grossProfitRatio,
                    netIncome,
                    netIncomeRatio,
                    calendarYear,
                    operatingIncomeRatio,
                  }, index) => (
                    <tr key={`${symbol}link`}>
                      <td>{calendarYear}</td>
                      <td
                        className="statement-data"
                        key={`${symbol + index}statement`}
                      >
                        <span>
                          <strong>Revenue:</strong>
                                                    &nbsp;
                          {`${revenue}$`}
                        </span>
                        <span>
                          <strong>GrossProfit:</strong>
                                                    &nbsp;
                          {`${grossProfit}$`}
                        </span>
                        <span>
                          <strong>Net income:</strong>
                                                    &nbsp;
                          {`${netIncome}$`}
                        </span>
                        <span>
                          <strong>Gross Profit Ratio:</strong>
                                                    &nbsp;
                          {`${grossProfitRatio}`}
                        </span>
                        <span>
                          <strong>Net Income Ratio:</strong>
                                                    &nbsp;
                          {`${netIncomeRatio}`}
                        </span>
                        <span>
                          <strong>Operating Income Ratio:</strong>
                                                    &nbsp;
                          {`${operatingIncomeRatio}`}
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </Table>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default StockDetail;
