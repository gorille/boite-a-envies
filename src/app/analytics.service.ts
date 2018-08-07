import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService  {

  constructor(private router: Router, private meta: Meta) {
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

  public updateCard(title: string, desc: string, image: string) {
    const props = new Map([
        ['og:url', (<any>window).location.href], 
        ['og:title', title], 
        ['og:image', image], 
        ['og:image:alt', title], 
        ['og:description', desc],
        ['description', desc]
      ]);
    props.forEach((value, prop)=> {      
      if (this.meta.getTag(`property='${prop}'`) !== undefined) {
        this.meta.updateTag({ property: prop, content: value })
      } else {
        this.meta.addTag({ property: prop, content: value })
      }
    });
  }
}
