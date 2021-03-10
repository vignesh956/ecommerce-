import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';

import { MobilesComponent } from './mobiles.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

const routes: Routes = [{ path: '', component: MobilesComponent },
{path : 'details/:id', component: PhoneDetailsComponent },
{path : 'cart', component: CartItemComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilesRoutingModule { }
