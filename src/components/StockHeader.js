import { Carousel, Card, Container } from 'react-bootstrap';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { fetchStock } from '../redux/stock/stock';

const { useEffect } = require('react');
const { useSelector, useDispatch } = require('react-redux');

const StockHeader = () => {
  const state = useSelector((state) => state.stock.stocksData);
  const active = state.slice(0, 4);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStock());
  }, [dispatch, state.length]);

  return (
    <section className="header-section-container">
      <Container className="header-container">
        <Carousel className="mt-3 position-relative">
          {active.map(
            ({
              symbol, change, name, price, changesPercentage,
            }) => {
              // eslint-disable-next-line
              const imgBG = require(`../assets/company/${symbol}.png`);
              return (
                <Carousel.Item key={`${symbol}link`}>
                  <Card className="text-white lg">
                    {/* eslint-disable-next-line */}
                      <Card.Img src={imgBG} alt="Card image" />
                    <Card.ImgOverlay className="item-container text-center align-center d-flex flex-column  justify-content-center">
                      <Card.Title className="company-name-title">{name}</Card.Title>
                      <Card.Text>
                        <span>
                          <strong>Price:</strong>
                          {' '}
                          {`${price}$`}
                        </span>
                        <span>
                          <FaLongArrowAltUp className="text-success" />
                          {changesPercentage}
                        </span>
                        <span>
                          <FaLongArrowAltDown className="text-danger" />
                          {change}
                        </span>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Carousel.Item>

              );
            },

          )}
        </Carousel>
      </Container>

    </section>

  );
};

export default StockHeader;
