import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService  {

  public _refreshFb = new Subject<boolean>();

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
    this._refreshFb.next(true);
  }
  
  public fbRefreshRequest(): Observable<boolean> {
    return this._refreshFb.asObservable();
  }
}
