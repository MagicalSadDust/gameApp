import { createSlice, combineReducers } from '@reduxjs/toolkit';

const levelSlice = createSlice({
  name: 'level',
  initialState: {
    jsonFiles: {},
  },
  reducers: {
    setJsonFiles: (state, action) => {
      state.jsonFiles = {...state.jsonFiles, ...action.payload}; 
    },
  },
});


const solvedWordsSlice = createSlice({
  name: 'solved',
  initialState: {
    solvedWords: [],
  },
  reducers: {
    setSolvedWords: (state, action) => {
      state.solvedWords = [...state.solvedWords, action.payload]; 
    },
    resetSolvedWords: (state) => {
      state.solvedWords = [];
    },
    setStoredWords: (state, action) => {
      state.solvedWords = action.payload;
    } 
  },
});


export const { setJsonFiles } = levelSlice.actions;
export const { setSolvedWords, resetSolvedWords, setStoredWords } = solvedWordsSlice.actions;


const rootReducer = combineReducers({
  level: levelSlice.reducer,
  solved: solvedWordsSlice.reducer,
});

export default rootReducer;



  