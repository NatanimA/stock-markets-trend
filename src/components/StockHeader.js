import { Carousel, Card, Container } from 'react-bootstrap';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { fetchStock } from '../redux/stock/stock';
import Chart from '../assets/images/chart.jpg';

const { useEffect } = require('react');
const { useSelector, useDispatch } = require('react-redux');

const StockHeader = () => {
  const state = useSelector((state) => state.stock.stocksData);
  const active = state.slice(0, 4);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStock());
  }, [dispatch]);

  return (
    <section className="header-section-container">
      <Container>
        <Carousel className="mt-3 position-relative">
          {active.map(
            ({
              symbol, change, name, price, changesPercentage,
            }) => (
              <Carousel.Item key={symbol}>
                <Card className="bg-dark text-white">
                  <Card.Img src={Chart} alt="Card image" />
                  <Card.ImgOverlay className="text-center align-center d-flex flex-column  justify-content-center">
                    <Card.Title>{name}</Card.Title>
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
            ),
          )}
        </Carousel>
      </Container>

    </section>

  );
};

export default StockHeader;
