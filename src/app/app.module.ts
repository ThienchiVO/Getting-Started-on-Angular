import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './organisms/product-list/product-list.component';
import { ProductDetailsComponent } from './molecules/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ButtonComponent } from './atom/button/button.component';
import { ParagraphComponent } from './atom/paragraph/paragraph.component';
import { FicheProduitComponent } from './molecules/fiche-produit/fiche-produit.component';
import { HeaderComponent } from './atom/header/header.component';
import { LinkComponent } from './atom/link/link.component';
import { SpanComponent } from './atom/span/span.component';
import { LabelComponent } from './atom/label/label.component';
import { AtomModule } from './atom/atom.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    AtomModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FicheProduitComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
