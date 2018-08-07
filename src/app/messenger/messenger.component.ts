import { Component, OnInit, AfterViewInit, Input, Renderer, ElementRef } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { FBMLAttribute, FBMLComponent } from 'ngx-facebook/dist/esm/components/fbml-component';

@Component({
  selector: 'app-messenger',
  template: ''
})
export class MessengerComponent extends FBMLComponent {
  @Input()
  @FBMLAttribute
  attribution

  @Input()
  @FBMLAttribute
  page_id="199891950466521"

  @Input()
  @FBMLAttribute
  logged_in_greeting="Bonjour, dites moi ce qui vous ferait plaisir !"

  @Input()
  @FBMLAttribute
  logged_out_greeting="Bonjour, dites moi ce qui vous ferait plaisir !"

  constructor( el: ElementRef, rnd: Renderer, private analytics : AnalyticsService) {
    super(el, rnd, 'fb-customerchat');
  }
}
