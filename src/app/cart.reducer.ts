import { createReducer, on } from '@ngrx/store';
import * as actions from './cart.actions';


export const cartReducerKey = 'cartItems';


export const initialState = [];


const _cartReducer = createReducer(initialState,
    on(actions.add, (state, { product }) => {
        const newState = ( state.find( item => item.name === product.name ) )  ? state :  [ product , ...state];
        return newState;
    }),
    on(actions.clear, state => [])
);

export function cartReducer(state, action) {
    return _cartReducer(state, action);
}