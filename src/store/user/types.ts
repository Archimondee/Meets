export interface UserState {
  goal: number;
  data: any[];
  favorites: any[];
}

export const ADD_GOAL = 'ADD_GOAL';
export const ADD_DATA = 'ADD_DATA';
export const ADD_FAVORITES = 'ADD_FAVORITES';

interface AddUserDataAction {
  type: typeof ADD_GOAL;
  payload: number;
}

interface AddDataAction {
  type: typeof ADD_DATA;
  payload: [];
}

interface AddFavorites {
  type: typeof ADD_FAVORITES;
  payload: [];
}

export type UserActionTypes = AddUserDataAction | AddDataAction | AddFavorites;
