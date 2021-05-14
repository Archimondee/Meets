export interface UserState {
  goal: number;
  data: any[];
  favorites: any[];
  preferences: string;
}

export const ADD_GOAL = 'ADD_GOAL';
export const ADD_DATA = 'ADD_DATA';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const SET_PREFERENCES = 'SET_PREFERENCES';

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

interface SetPreferences {
  type: typeof SET_PREFERENCES;
  payload: [];
}

export type UserActionTypes =
  | AddUserDataAction
  | AddDataAction
  | AddFavorites
  | SetPreferences;
