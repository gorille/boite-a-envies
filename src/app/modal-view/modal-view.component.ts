import { Component, Input } from '@angular/core';
import { Product } from '../data/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent {

  @Input() product: Product;

  constructor(public activeModal: NgbActiveModal) { }

}
