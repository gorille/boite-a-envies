import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit, AfterViewInit {

  forceRedraw = true

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.fbRefreshRequest().subscribe(_=> {
      console.log("requesting redraw");
      
      this.forceRedraw = !this.forceRedraw;
      if ((<any>window).FB !== undefined) { 
        (<any>window).FB.XFBML.parse();
      }
    })
  }

  ngAfterViewInit() {
    console.log("redrawing");
    if ((<any>window).FB !== undefined) { 
      (<any>window).FB.XFBML.parse();
    }
  }
  

}
