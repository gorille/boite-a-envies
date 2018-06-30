import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../data/product'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[]

  constructor(
                private route: ActivatedRoute,
                private location: Location,
                private productsService: ProductService
              ) {}
  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    console.log(type)
    this.products = this.productsService.getProducts().filter (elt => elt.type === type)
  }

}
