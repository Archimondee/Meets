import {UserActionTypes, UserState} from './types';

const initialState: UserState = {
  goal: 0,
  data: [],
  favorites: [],
  preferences: 'list',
};

export function userReducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case 'ADD_GOAL':
      return {
        ...state,
        goal: action.payload,
      };

    case 'ADD_DATA':
      return {
        ...state,
        data: action.payload,
      };

    case 'ADD_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };

    case 'SET_PREFERENCES':
      return {
        ...state,
        preferences: action.payload,
      };

    default:
      return state;
  }
}
