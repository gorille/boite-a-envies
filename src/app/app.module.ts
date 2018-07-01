import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

// facebook sdk integration
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    JwSocialButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
