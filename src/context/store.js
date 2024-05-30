import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlistSlice from "./wishlistSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
