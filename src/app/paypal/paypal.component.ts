import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { Product } from '../data/product';
import { environment } from "../../environments/environment";
import { Router } from '@angular/router';

/**
 * Global variable where PayPal is loaded to
 */
declare var paypal: any;


@Component({
  selector: 'app-paypal',
  template: `
  <div #payPalScriptElem></div>
  <div #payPalButtonContainerElem [id]="payPalButtonContainerId"></div>`
})
export class PaypalComponent implements OnChanges, AfterViewInit {

  @Input() product: Product

    /**
   * Container for paypal script
   */
  @ViewChild('payPalScriptElem') paypalScriptElem: ElementRef;

  /**
   * Used for indicating delayed rendered if container is not yet ready in DOM
   */
  private registerPayPalScriptWhenContainerIsReady = false;

  /**
   * Holds current container element
   */
  private _payPalButtonContainerElem?: ElementRef;
  @ViewChild('payPalButtonContainerElem') set payPalButtonContainerElem(content: ElementRef) {
      if (content) {
          this._payPalButtonContainerElem = content;
      }
  }

  /**
  * Name of the global variable where paypal is stored
  */
  private readonly paypalWindowName = 'paypal';

  /**
   * PayPal integration script url
   */
  private readonly paypalScriptUrl = 'https://www.paypalobjects.com/api/checkout.js';

  /**
   * Id of the element where PayPal button will be rendered
   */
  public payPalButtonContainerId?: string;

  private readonly payPalButtonContainerIdPrefix = 'app-paypal-button-container-';

  constructor( private router: Router  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
      // init when config once its available
      if (this.product) {
          this.initPayPal();
      }
  }

  ngAfterViewInit(): void {
      // register script if element is ready in dom
      if (this.registerPayPalScriptWhenContainerIsReady && this._payPalButtonContainerElem) {
          this.setupScript();
          this.registerPayPalScriptWhenContainerIsReady = false;
      }
  }

  private initPayPal(): void {
      // set unique paypal container button id
      this.payPalButtonContainerId = `${this.payPalButtonContainerIdPrefix}${this.getPseudoUniqueNumber()}`;
      // check if paypal was already register and if so, don't add it to page again
      if (!window[this.paypalWindowName]) {
          // register script
          this.addPayPalScriptToPage();
      } else {
          // just register payment
          this.handleScriptRegistering();
      }
  }

  private getPseudoUniqueNumber(): number {
      return new Date().valueOf();
  }

  private addPayPalScriptToPage(): void {
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = this.paypalScriptUrl;
      script.onload = () => this.handleScriptRegistering();
      script.async = true;
      script.defer = true;

      this.paypalScriptElem.nativeElement.appendChild(script);
  }

  private handleScriptRegistering(): void {
      // check if container with requested id exists
      // this is here because dynamically switching between components would cause PayPal to
      // throw an error if the container already existed before
      if (this._payPalButtonContainerElem && this._payPalButtonContainerElem.nativeElement &&
          this._payPalButtonContainerElem.nativeElement.id === this.payPalButtonContainerId) {
          // container is ready, setup script right away
          this.setupScript();
      } else {
          // container is not ready, delay registering until it is
          this.registerPayPalScriptWhenContainerIsReady = true;
      }
  }

  private setupScript(): void {
      // first clear container
      if (!this._payPalButtonContainerElem) {
          throw Error(`Cannot setup script because paypal button container with id '${this.payPalButtonContainerId}' is not yet ready`);
      }

      this._payPalButtonContainerElem.nativeElement.innerHTML = '';

      if (!window[this.paypalWindowName]) {
          throw Error('PayPal script is not available', );
      }

      // render PayPal button as per their docs at
      // https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/add-paypal-button/
      window[this.paypalWindowName].Button.render({
          // set environment
          env: environment.paypalMode,

          // Show the buyer a 'Pay Now' button in the checkout flow
          commit: true,

          // init client for client side integration
          client: {
            sandbox: 'AY2ALgdma9l5Uy3lb-uYMUrlwUAw-QHCvacNpkugnQwOUONo5Ay1uCzHUzUZ_UIHCOE-LLHSj8Vi_his',
            production: 'AVrSJvMTSw26B0-c-M1_ki86uFwY1SFQpxBw8pMccZeDTRJp9jncbPpxiGEF0kOtfZaVxAEDaGB3iMLN'
          },


          style: {
            label: 'buynow',
            fundingicons: true, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | responsive
            shape: 'rect',   // pill | rect
            color: 'blue'   // gold | blue | silver | black
          },


          // payment() is called when the button is clicked
          payment: (data, actions) => {
              return actions.payment.create({
                  transactions: [
                      {
                          amount: { 
                            total: Number(this.product.prix) + environment.shippingCost, currency: 'EUR' ,
                            details: {
                              subtotal: Number(this.product.prix),
                              shipping: environment.shippingCost
                            }
                          },
                          item_list: {
                            items: [
                              {
                                name: this.product.title,
                                description: this.product.description,
                                quantity: '1',
                                price: Number(this.product.prix),
                                currency: 'EUR'
                              }]
                          }
                      }
                  ]
              });
          },

          // onAuthorize() is called when the buyer approves the payment
          onAuthorize: (data: any, actions: any) => {
            return actions.payment.execute().then( () =>
              {
                  console.log(data);
                  
                // navigate to thanks page !
                this.router.navigateByUrl('/merci')
              });
          },

          onError: (err) => {
              console.error(err);
              
          },
      }, `#${this.payPalButtonContainerId}`);
  }
}
