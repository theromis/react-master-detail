import { combineReducers, createStore } from 'redux';
import { example } from './example.reducer';
import { ExampleState } from './example.model';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppStore {
    example: ExampleState
}

export const store = createStore(
    combineReducers({ example: example }),
    composeWithDevTools() 
);