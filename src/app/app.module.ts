import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FacebookModule } from 'ngx-facebook';
import { MessengerComponent } from './messenger/messenger.component';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { DialogSurMesureComponent } from './dialog-sur-mesure/dialog-sur-mesure.component';
import { MessengerIconComponent } from './messenger-icon/messenger-icon.component';
import { NgxJsonLdModule } from 'ngx-json-ld';
import { PaypalComponent } from './paypal/paypal.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailComponent,
    AProposComponent,
    MessengerComponent,
    DialogSurMesureComponent,
    MessengerIconComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FacebookModule.forRoot(),
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dgtsw7ufe' } as CloudinaryConfiguration),
    NgxJsonLdModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
