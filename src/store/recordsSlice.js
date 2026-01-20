import { createSlice } from "@reduxjs/toolkit";

const recordsSlice = createSlice ({
    name: "records",
    initialState: {
        items: "",
        seachTerm: "",
        nextId: "", 
    },

    reducers: {},
});

export default recordsSlice.reducer;