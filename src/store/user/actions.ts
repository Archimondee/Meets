import {ADD_GOAL, ADD_DATA, ADD_FAVORITES} from './types';

export function addGoal(data: number) {
  return {
    type: ADD_GOAL,
    payload: data,
  };
}

export function addData(data: any[]) {
  return {
    type: ADD_DATA,
    payload: data,
  };
}

export function addFavorites(data: any[]) {
  return {
    type: ADD_FAVORITES,
    payload: data,
  };
}
