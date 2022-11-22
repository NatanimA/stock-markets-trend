import axios from 'axios';

const FETCH_STOCK = 'FETCH_STOCK';
const FILTER_COMPANY = 'FILTER_COMPANY';
const COMPANY_STATEMENTS = 'COMPANY_STATEMENTS';
const STOCK_DETAIL = 'STOCK_DETAIL';
const RESET_STOCK = 'RESET_STOCK';
const API_URL = 'https://financialmodelingprep.com/api/v3/';
const API_KEY = 'e528de4fe03aeb75adc32ec89784f643';
const initialState = {
  stocksData: [],
  details: [],
  statement: [],
  filtered: [],
};

export const fetchStock = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}stock_market/actives?limit=20&apikey=${API_KEY}`).then(
    (res) => res,
  ).catch((err) => err);
  const payload = response.data;
  dispatch({
    type: FETCH_STOCK,
    payload,
  });
};

export const fetchStockDetails = (symbol) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/profile/${symbol}?apikey=${API_KEY}`).then((res) => res).catch((res) => res);
    const payload = response.data;
    dispatch({
      type: STOCK_DETAIL,
      payload,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchCompanyStatements = (symbol) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}income-statement/${symbol}?limit=120&apikey=${API_KEY}`).then((res) => res).catch((err) => err);
    const payload = response.data;
    console.log('Statement Payload: ', response);
    dispatch({
      type: COMPANY_STATEMENTS,
      payload,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const resetStock = () => ({
  type: RESET_STOCK,
});

const stockReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STOCK:
      return { ...state, stocksData: [...payload] };

    case STOCK_DETAIL:
      return { ...state, details: [...payload] };

    case COMPANY_STATEMENTS:
      return { ...state, statement: [...payload] };

    case FILTER_COMPANY:
      if (payload === '') {
        return { ...state, filtered: [...state.stocksData] };
      }
      return {
        ...state,
        filtered: [
          ...state.stocksData.filter(({ name }) => name
            .toLowerCase().includes(payload.toLowerCase())),
        ],
      };
    case RESET_STOCK:
      return { ...state, statement: [], details: [] };
    default:
      return state;
  }
};

export default stockReducer;
