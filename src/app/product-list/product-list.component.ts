import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../data/product';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewComponent } from '../modal-view/modal-view.component';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]
  page = 1

  constructor(
                private route: ActivatedRoute,
                private location: Location,
                private productsService: ProductService,
                private modalService: NgbModal,
                private analyticsService: AnalyticsService
              ) {}
  ngOnInit() {
    this.route.paramMap
              .subscribe( params => {
                const type = params.get('type');
                this.products = this.productsService.getProducts().filter (elt => elt.type === type)
              });
  }

  goBack(): void {
    this.location.back();
  }

  openDetails(product: Product): void {
    // send analytics
    this.analyticsService.openProduct(product.title);
    
    const modalRef = this.modalService.open(ModalViewComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.product = product;
  }
}
