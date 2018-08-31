import { NgModule, AfterViewInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component'
import { ProductListComponent } from '../product-list/product-list.component'
import { AProposComponent } from '../a-propos/a-propos.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MerciComponent } from '../merci/merci.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent  },
  { path: 'products/:type', component: ProductListComponent },
  { path: 'presentation', component: AProposComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'merci', component: MerciComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule  { 
  
}
