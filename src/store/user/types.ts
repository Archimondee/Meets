export interface UserState {
  goal: number;
}

export const ADD_GOAL = 'ADD_GOAL';

interface AddUserDataAction {
  type: typeof ADD_GOAL;
  payload: number;
}

export type UserActionTypes = AddUserDataAction;
