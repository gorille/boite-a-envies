import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Product } from '../data/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { AnalyticsService } from '../analytics.service';

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
              private analyticsService: AnalyticsService,
              private router: Router,
             ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.productsService.getProducts().find(product => product.id === params.get('id'))
      
      this.analyticsService.updateCard(
        this.product.title,
        this.product.description,
        this.product.image
      )
    });
  }

  ngAfterViewInit() {
    if ((<any>window).FB !== undefined) {
      (<any>window).FB.XFBML.parse();
    }
  }

  back() {
    this.location.back()
  }

}
