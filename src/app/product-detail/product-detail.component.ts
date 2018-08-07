import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Product } from '../data/product';
import { ActivatedRoute } from '@angular/router';
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
   this.analyticsService.refreshFB()
  }

  back() {
    this.location.back()
  }

}
