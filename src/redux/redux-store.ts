import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {pairsReducer} from "./pairs-reducer";


let reducersBatch = combineReducers({
    pairs: pairsReducer
});

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

type ReducerBatchType = typeof reducersBatch;
export type AppStateType = ReturnType<ReducerBatchType>;

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export default store;