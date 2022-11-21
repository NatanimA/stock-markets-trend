import Card from 'react-bootstrap/Card';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import Chart from '../assets/images/chart.jpg';

const StockItems = ({ stock }) => {
  const {
    symbol, name, price, change, changesPercentage,
  } = stock;
  return (
    <div className="stock-item-container">
      <Card className="card-container">
        <Card.Img variant="top" src={Chart} />
        <Card.ImgOverlay className="text-center align-center d-flex flex-column  justify-content-center">
          <Card.Title className="stock-name">{name}</Card.Title>
          <Card.Text>
            <span className=" bg-dark text-white p-2 text-center">
              {symbol}
            </span>
          </Card.Text>

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
          <Card.Text className="right-side d-flex flex-column arrow-right">
            <span>
              <FiArrowRightCircle className="text-white m-2 h3" />
            </span>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

StockItems.propTypes = {
  stock: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
};

export default StockItems;
