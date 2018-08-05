import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Product } from '../data/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
 
  product: Product;

  constructor(private route: ActivatedRoute, 
              private productsService: ProductService,
              private location: Location,
             ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.productsService.getProducts().find(product => product.id === params.get('id'))
    });
  }

  ngAfterViewInit() {
    console.log("reloading fb", (<any>window).FB);
    if ((<any>window).FB !== undefined) {
      console.log("reloading fb");
      (<any>window).FB.XFBML.parse();
    }
  }

  back() {
    this.location.back()
  }

}
