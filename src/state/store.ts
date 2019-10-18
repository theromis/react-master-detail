import { combineReducers, createStore } from 'redux';
import { example } from './example.reducer';
import { ExampleState } from './example.model';

export interface AppStore {
    example: ExampleState
}

export const store = createStore(combineReducers({ example: example }));