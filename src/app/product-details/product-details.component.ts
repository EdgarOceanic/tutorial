import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { products } from './../products';
import { CartService } from '../cart.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as cartActions from './../cart.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => this.product = products[
        + params.get('productId')
      ]
    );
  }

  addToCart(product: Product): void {
    // this.cartService.addToCart(product);
    this.store.dispatch(
      cartActions.add({ product })
    );
    alert(
      `${product.name} has been added to the cart!`
    );
  }

}
