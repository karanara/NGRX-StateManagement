import { createReducer,on } from '@ngrx/store';
//import { CounterActions, IncrementAction } from './counter.actions';
import { increment } from './counter.actions';
//import { INCREMENT } from './counter.actions';
//import { Action } from '@ngrx/store';
const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment,(state,action)=> state + action.value)
);

/*export function counterReducer(state = initialState,action:CounterActions | Action) {
  if(action.type === INCREMENT){
    return state + (action as IncrementAction).value;
  }
  return state;
}*/
