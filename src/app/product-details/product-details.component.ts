import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { products } from './../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => this.product = products[
        + params.get('productId')
      ]
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(
      `${product.name} has been added to the cart!`
    );
  }

}
