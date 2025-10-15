/**
* test scenario for isPreloadReducer
*
* - isPreloadReducer function
*  - should return the initial state when given by unknown action
*  - should return the isPreload when given by SET_IS_PRELOAD action
*/

import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer';
import { ActionType } from './action';

describe('isPreloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = isPreloadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the isPreload when given by SET_IS_PRELOAD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: true,
      },
    };
 
    // action
    const nextState = isPreloadReducer(initialState, action);
 
    // assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});