import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    if ((<any>window).FB !== undefined) {
     (<any>window).FB.XFBML.parse();
   }
 }
}
