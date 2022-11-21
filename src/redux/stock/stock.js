import axios from 'axios';

const FETCH_STOCK = 'FETCH_STOCK';
// const STOCK_DETAIL = 'STOCK_DETAIL';
const API_URL = 'https://financialmodelingprep.com/api/v3/';
const API_KEY = 'e164fc0fa90b9832b743d720daa77a82';
const initialState = [];

export const fetchStock = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}stock_market/actives?limit=20&apikey=${API_KEY}`).then(
    (res) => res,
  ).catch((err) => err);
  dispatch({
    type: FETCH_STOCK,
    response,
  });
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK:
      return action.response.data;
    default:
      return state;
  }
};

export default stockReducer;
