import Card from 'react-bootstrap/Card';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StockItems = ({ stock }) => {
  const {
    symbol, name, price, change, changesPercentage,
  } = stock;
  // eslint-disable-next-line
  const imgBG = require(`../assets/company/${symbol}.png`);
  return (
    <Card className="card-container">
      <Link to={`details/${symbol}`} key={`${symbol}link`} className="text-white">
        <Card.Img variant="top" src={imgBG} />
        <Card.ImgOverlay className="bg-dark text-center align-center d-flex flex-column  justify-content-center">
          <Card.Title className="company-name-title">{name}</Card.Title>
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
