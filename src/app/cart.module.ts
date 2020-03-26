import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { cartReducerKey, cartReducer } from './cart.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(
            cartReducerKey, cartReducer
        )
    ]
})

export class CartModule {

}
