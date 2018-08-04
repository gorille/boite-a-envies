import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService  {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && (<any>window).ga !== undefined) {
        this.navigation(event.urlAfterRedirects);
      }
    })
  }

  
  get tracker() : any {
      return (<any>window).ga.getAll()[0];
  }

  public navigation(url : string) {
    this.tracker.set('page', url);
    this.tracker.send('pageview');
  }

  public openProduct(product: string) {
    this.tracker.send('event', 'product', product);
  }
}
