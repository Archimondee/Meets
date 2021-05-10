import {ADD_GOAL} from './types';

export function addGoal(data: number) {
  return {
    type: ADD_GOAL,
    payload: data,
  };
}
