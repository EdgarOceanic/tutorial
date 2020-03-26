import { createAction, props } from '@ngrx/store';
import { Product } from './product';

export const add = createAction(
    '[Cart] add',
    props<{ product: Product }>()
);
export const getAll = createAction('[Cart] getAll');
export const clear = createAction('[Cart] clear');
