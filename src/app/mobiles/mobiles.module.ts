import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MobilesRoutingModule } from './mobiles-routing.module';
import { MobilesComponent } from './mobiles.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [MobilesComponent, PhoneDetailsComponent, CartItemComponent],
  imports: [
    CommonModule,
    MobilesRoutingModule,
    IonicModule
  ]
})
export class MobilesModule { }
