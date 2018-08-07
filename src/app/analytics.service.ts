import { Injectable, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta, DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService  {


  constructor(private router: Router, private meta: Meta, @Inject(DOCUMENT) private document: any) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && (<any>window).ga !== undefined) {
        this.navigation(event.urlAfterRedirects);
      }
    })
  }

  
  get tracker() : any {
      return (<any>window).ga.getAll()[0];
  }

  /**
   * updates the analytics to reflect navigation
   * @param url 
   */
  public navigation(url : string) {
    this.tracker.set('page', url);
    this.tracker.send('pageview');
  }

  /**
   * changes og data to reflect navigation
   * @param title title of the page
   * @param desc description of the page
   * @param image image of  the page
   */
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

  /**
   * sends out the event requesting a window.FB.XFBML/parse()
   */
  public refreshFB(): void {
    if ((<any>window).FB !== undefined) { 
      const elts: any[] = Array.from(this.document.getElementsByClassName('fb-like'))
      console.log("redrawing", elts);
      elts.forEach(elt => (<any>window).FB.XFBML.parse(elt.parentElement))
    }
  }
}
