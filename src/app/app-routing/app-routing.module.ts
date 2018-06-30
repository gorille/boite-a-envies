import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component'
import { ProductListComponent } from '../product-list/product-list.component'

const routes: Routes = [
  { path: '', component: WelcomeComponent  },
  { path: 'products/:type', component: ProductListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
