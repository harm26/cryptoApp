import { configureStore } from "@reduxjs/toolkit";
import coin from "./slices/coin/coinSlice";

export default configureStore({
  reducer: {
    coin,
  },
});
