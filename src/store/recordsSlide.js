import { createSlice } from "@reduxjs/toolkit";

const recordsSlide = createSlice ({
    name: "records",
    initialState: {
        items: "",
        seachTerm: "",
        nextId: "", 
    },

    reducers: {},
});

export default recordsSlide.reducer;