import { Injectable } from '@angular/core';
import { Product } from './data/product'
import * as products from './products'

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  constructor() {}

  getProducts() : Product[] {
    return products.all
  }
}
