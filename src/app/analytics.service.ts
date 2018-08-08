import { Injectable, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta, DOCUMENT, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService  {

  IMAGE_BASE = 'http://res.cloudinary.com/dgtsw7ufe/image/upload/';

  constructor(private router: Router, 
              private meta: Meta, 
              @Inject(DOCUMENT) private document: any, 
              private title: Title) {
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
        ['og:image', this.IMAGE_BASE + image], 
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
    // sets the title.
    this.title.setTitle(title);
    this.refreshCanonical();
    
  }

  private refreshCanonical() {
    const linkBefore :HTMLLinkElement = this.document.getElementById('canonicalUrl')
    if (linkBefore) {
      linkBefore.remove();
    }
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.document.head.appendChild(link);
    link.setAttribute('href', this.document.URL);
    link.setAttribute('id', 'canonicalUrl');
  }

  /**
   * list all like and refresh them
   */
  public refreshFB(): void {
    if ((<any>window).FB !== undefined) { 
      const elts: any[] = Array.from(this.document.getElementsByClassName('fb-like'))
      elts.forEach(elt => (<any>window).FB.XFBML.parse(elt.parentElement))
    }
  }
}
