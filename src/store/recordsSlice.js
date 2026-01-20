import { createSlice } from "@reduxjs/toolkit";

const demoRecords = [
    {
        id: 1,
        name: "Naruto Uzumaki",
        email: "shfbvjdbk",
        phone: "987654321",
        position: "Hokage",
    },
     {
        id: 2,
        name: "Sasuke Uchiha",
        email: "shfbvjhdk",
        phone: "987654310",
        position: "Uchiha Clan Member",
    },
     {
        id: 3,
        name: "Gaara",
        email: "shfbjhdbk",
        phone: "987654210",
        position: "Sand Village Leader",
    },
     {
        id: 4,
        name: "Kakashi Hatake",
        email: "shfvjhdbk",
        phone: "987643210",
        position: "Jonin ",
    },
];


// Calculate nextId based on demoRecords
const calculateNextId = (records) => {
    if (!records || records.length === 0) return 1;
    return Math.max(...records.map((r) => r.id)) + 1;
};


const recordsSlice = createSlice ({
    name: "records",
    initialState: {
        items: demoRecords,
        seachTerm: "",
        nextId: calculateNextId(demoRecords), 
    },

    reducers: {
        addRecord: (state, action) => {
            const newRecord = {id: state.nextId, ...action.payload};
            state.items.push(newRecord);

            localStorage.setItem("records", JSON.stringify(state.items));
            state.nextId = calculateNextId(state.items);
    },
    },
});

export default recordsSlice.reducer;