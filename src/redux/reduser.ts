import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isChosenPerson: boolean,
}

const initialState: InitialState = {
  isChosenPerson: false,
};

const personReducer = createSlice({
  name: 'personInfo',
  initialState,
  reducers: {
    setIsChosenPerson: (state, action) => {
      return {
        ...state,
        isChosenPerson: action.payload,
      };
    },
  },
});

export const selectors = {
  getIsChosenperson: (state: InitialState) => state.isChosenPerson,
};

export const {
  setIsChosenPerson,
} = personReducer.actions;

export const { reducer } = personReducer;
