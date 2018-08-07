import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit, AfterViewChecked {

  forceRedraw = true
  draw  = true

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.fbRefreshRequest().subscribe(_=> {
      console.log("requesting redraw");
      this.draw = true
    })
  }
  ngAfterViewChecked() {
    if ((<any>window).FB !== undefined && this.draw) { 
      console.log("redrawing");
      (<any>window).FB.XFBML.parse();
      this.draw = false
    }
  }

}
