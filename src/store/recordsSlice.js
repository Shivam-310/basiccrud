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


// load records from local storage or demo data
const LoadRecordsFromStorage = () => {
    try {
        const saveRecords = localStorage.getItem("employeeRecords");
        return saveRecords ? JSON.parse(saveRecords) : demoRecords;
    }catch(error){console.error("error loading", error);
    }
};

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
        nextId: calculateNextId(LoadRecordsFromStorage()), 
    },

    // add new record
    reducers: {
        addRecord: (state, action) => {
            const newRecord = {id: state.nextId, ...action.payload};
            state.items.push(newRecord);

            localStorage.setItem("records", JSON.stringify(state.items));
            state.nextId = calculateNextId(state.items);
    },
    
    // upadate record
    updatedRecord: (state, action) => {
        const {id, data} = action.payload;
        const index = state.items.findIndex((r) => r.id === id);

        if (index !== -1){
            state.items[index] = {...state.items[index], ...data};
            localStorage.setItem("records", JSON.stringify(state.items));
        }
    },

    // delete record
    deleteRecord: (state, action) => {
        state.items = state.items.filter((r) => r.id !== action.payload);
        localStorage.setItem("employeeRecords", JSON.stringify(state.items));
        state.nextId = calculateNextId(state.items);
    },

    // search record
    setSearchTerm: (state, action) => {
        state.seachTerm = action.payload;
    },
    resetAllRecords: (state) => {
        state.items = demoRecords;
        state.nextId = calculateNextId(demoRecords);
        localStorage.setItem("employeeRecords", JSON.stringify(state.items));
    }
    },
});

export const { addRecord, 
    updatedRecord, 
    deleteRecord, 
    setSearchTerm, 
    resetAllRecords,
 } = recordsSlice.actions;

//  selectors
export const selectAllRecords = (state) => state.records.items;
export const selectSearchTerm = (state) => state.records.seachTerm;

export const selectFilteredRecords = (state) => {
    const term = state.records.seachTerm.toLowerCase();
    return state.records.items.filter((r) =>
        r.name.toLowerCase().includes(term) ||
        r.email.toLowerCase().includes(term) || 
        r.position.toLowerCase().includes(term)
);
};

export default recordsSlice.reducer;