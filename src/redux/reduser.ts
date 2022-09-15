import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/UserType';

interface InitialState {
  isChosenPerson: boolean,
  chosenUser: User,
}

const initialState: InitialState = {
  isChosenPerson: false,
  chosenUser: {
    id: 0,
    name: '',
    status: '',
    dateStart: '',
    dateFinish: '',
  },
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
    setChosenUser: (state, action) => {
      return {
        ...state,
        chosenUser: action.payload,
      };
    },
  },
});

export const selectors = {
  getIsChosenperson: (state: InitialState) => state.isChosenPerson,
  getChosenUser: (state: InitialState) => state.chosenUser,
};

export const {
  setIsChosenPerson,
  setChosenUser,
} = personReducer.actions;

export const { reducer } = personReducer;
