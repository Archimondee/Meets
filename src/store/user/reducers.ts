import {UserActionTypes, UserState} from './types';

const initialState: UserState = {
  goal: 0,
};

export function userReducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case 'ADD_GOAL':
      return {
        ...state,
        goal: action.payload,
      };

    default:
      return state;
  }
}
