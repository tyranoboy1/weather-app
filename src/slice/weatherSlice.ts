import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  days: any[];
}

const initialState: initialState = {
  days: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setDaysData: (state, action: PayloadAction<any[]>) => {
      return {
        ...state,
        days: action.payload,
      };
    },
  },
});

export default weatherSlice;
