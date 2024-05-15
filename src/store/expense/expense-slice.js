const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 100,
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      console.log(action);
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeActions: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const { addExpenseAction, setIncomeActions } = expenseSlice.actions;
