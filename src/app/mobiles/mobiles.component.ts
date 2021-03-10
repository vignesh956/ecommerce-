import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SelectmobileService } from '../selectmobile.service';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobiles = true;
  desktops = false;
  tabs = false;
  clothes = false;
  redmiMobiles = [];
  // redmiMobiles1 = [];
  totalItem = 0;
  selectitem = [];
  totalPrice: number = 0;
  tempredmiMobiles =[];

  knobValues: any = {
    upper: 50000,
    lower: 0,
  };
  constructor(private router: Router, private mobileService1: SelectmobileService) { }

  ngOnInit(): void {
    this.redmiMobiles = this.mobileService1.getredmiMobiles();

    this.tempredmiMobiles=this.redmiMobiles
    console.log(this.tempredmiMobiles)

  }
  totalItems(talk: any) {
    this.totalPrice = talk.price + this.totalPrice;
    console.log(this.totalPrice);
    const cartItem = this.selectitem.find((item: any) => {
      return talk.id === item.talk.id;
    });
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      const item = {
        talk,
        quantity: 1
      };
      this.selectitem.push(item);
    }

    console.log(this.totalItem);
    this.totalItem = this.totalItem + 1;

    console.log(this.selectitem);
    this.mobileService1.setData(this.selectitem);
  }
  callPriceRange() {
    if (this.tempredmiMobiles ) {
      const priceFiltered = this.tempredmiMobiles.filter((item) => {
        return  item.price <= this.knobValues.upper;
        
      });
      console.log(priceFiltered)
      this.tempredmiMobiles = priceFiltered;
    }
  }
  resetFilter() {
    this.knobValues = {
      upper: 50000,
      lower: 0,
    };
  }
//   callPriceRange(){
//     for (let i = 0; i < this.redmiMobiles.length; i++) {
//       if (this.redmiMobiles[i].price > 13000) {
//         this.tempredmiMobiles.push(this.redmiMobiles[i]);
//       }
//   }
 
//   console.log(this.tempredmiMobiles);
  
// }
}
