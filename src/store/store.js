import { configureStore } from "@reduxjs/toolkit";
import recordsSlice from "./recordsSlide";

export const store = configureStore({
    reducer: {
        records: recordsSlice,
    },
});