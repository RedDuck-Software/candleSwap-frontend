import {InferActionsTypes} from "./redux-store";

export const actionsError = {
    addPair: (pair: PairsType) => ({
        type: 'ADD_PAIR',
        pair
    } as const)
}

type ActionsTypes = InferActionsTypes<typeof actionsError>
export type PairsType = {
    token0Address: string;
    token1Address: string;
    token0Symbol: string;
    token1Symbol: string;
}
let initialState = {
    pairs: null as PairsType[] | null
};
export type InitialStateType = typeof initialState;
export const pairsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_PAIR':
            return {...state, pairs: [...state.pairs, action.pair]}
        default:
            return {...state};
    }
};