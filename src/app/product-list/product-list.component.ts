import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../data/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]
  page = 1
  type: string

  constructor(
                private route: ActivatedRoute,
                private productsService: ProductService
              ) {}
  ngOnInit() {
    this.route.paramMap
              .subscribe( params => {
                this.page = 1;
                this.type = params.get('type');
                this.products = this.productsService.getProducts().filter (elt => elt.type === this.type)
              });
  }
}
