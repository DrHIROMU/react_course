import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";

//https://redux-test-911cd-default-rtdb.asia-southeast1.firebasedatabase.app/

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
