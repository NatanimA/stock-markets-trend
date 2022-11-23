import Card from 'react-bootstrap/Card';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Chart from '../assets/images/chart.jpg';

const StockItems = ({ stock }) => {
  const {
    symbol, name, price, change, changesPercentage,
  } = stock;
  let imgBG = null;
  try {
    // eslint-disable-next-line
    imgBG = require(`../assets/company/${symbol}.png`);
  } catch (err) {
    imgBG = Chart;
  }

  return (
    <Card className="card-container">
      <Link to={`details/${symbol}`} key={`${symbol}link`} className="text-white">
        <Card.Img variant="top" src={imgBG} />
        <Card.ImgOverlay className="item-container text-center align-center d-flex flex-column  justify-content-center">
          <Card.Title className="bg-dark company-name-title">{name}</Card.Title>
          <Card.Text>
            <span className="text-white p-2 text-center">
              {symbol}
            </span>
          </Card.Text>

          <span>
            <strong>Price:</strong>
            {' '}
            {`${price}$`}
          </span>
          <span className="company-name-title">
            <FaLongArrowAltUp className="text-success" />
            {changesPercentage}
          </span>
          <span className="company-name-change">
            <FaLongArrowAltDown className="text-danger" />
            {change}
          </span>
          <Card.Text className="right-side d-flex flex-column arrow-right">
            <span>
              <FiArrowRightCircle className="text-white m-2 h3" />
            </span>
          </Card.Text>
        </Card.ImgOverlay>

      </Link>
    </Card>
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
