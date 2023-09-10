import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coin: [],
  isLoading: false,
};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setCoin: (state, action) => {
      state.coin = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCoin, setIsLoading, setInputContent } = coinSlice.actions;
export default coinSlice.reducer;

// funcion para traer la informacion de la moneda

export const fetchCoin = () => async (dispatch) => {
  setIsLoading(true);
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const data = await response.json();
  dispatch(setCoin(data));
  setIsLoading(false);
};

// funcion para filtrar por nombre y simbolo la informacion de la moneda

export const handleInput = (text) => async (dispatch) => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const data = await response.json();
  dispatch(
    setCoin(
      !text
        ? data
        : data.filter(
            (item) =>
              item.name.toLowerCase().includes(text.toLowerCase()) ||
              item.symbol.toLowerCase().includes(text.toLowerCase())
          )
    )
  );
};
