import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectmobileService {
  cartData: any = new BehaviorSubject(null);

  getredmiMobiles() {
    return [
      {
        'id': 1,
        'image': 'https://shm-shopmanianet.netdna-ssl.com/files/p/t/645/samsung-galaxy-j7-j700f~9487645.jpg',
        'brand': 'Samsung Galaxy M31',
        'price': 14000,
        'moredetails': `1.Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera . 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support.3.Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM`
      },
      {
        'id': 2,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51Hoc5kLc5L._SL1500_.jpg',
        'brand': 'Samsung  Galaxy S7',
        'price': 12000
      },
      {
        'id': 3,
        'image': 'https://fdn2.gsmarena.com/vv/bigpic/nokia-5228.jpg',
        'brand': 'Nokia 5332',
        'price': 15000
      },
      {
        'id': 4,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/41yPjeDVY4L._SL1024_.jpg',
        'brand': 'Apple Iphone 5s',
        'price': 19999
      },
      {
        'id': 5,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/61Z-7BVaFUL._SL1500_.jpg',
        'brand': 'Redmi Note 4',
        'price': 15999
      },
      {
        'id': 6,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51Hoc5kLc5L._SL1500_.jpg',
        'brand': 'Redmi 6 Pro',
        'price': 12999
      },
      {
        'id': 1,
        'image': 'https://shm-shopmanianet.netdna-ssl.com/files/p/t/645/samsung-galaxy-j7-j700f~9487645.jpg',
        'brand': 'Samsung Galaxy M31',
        'price': 14000,
        'moredetails': `1.Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera . 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support.3.Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM`
      },
      {
        'id': 2,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51Hoc5kLc5L._SL1500_.jpg',
        'brand': 'Samsung  Galaxy S7',
        'price': 12000
      },
      {
        'id': 3,
        'image': 'https://fdn2.gsmarena.com/vv/bigpic/nokia-5228.jpg',
        'brand': 'Nokia 5332',
        'price': 15000
      },
      {
        'id': 4,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/41yPjeDVY4L._SL1024_.jpg',
        'brand': 'Apple Iphone 5s',
        'price': 19999
      },
      {
        'id': 5,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/61Z-7BVaFUL._SL1500_.jpg',
        'brand': 'Redmi Note 4',
        'price': 15999
      },
      {
        'id': 6,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51Hoc5kLc5L._SL1500_.jpg',
        'brand': 'Redmi 6 Pro',
        'price': 12999
      }
    ];
  }


 private http: HttpClient
 constructor() {
   
  }
 
  setData(data: any) {
    this.cartData.next(data);
  }
  getData() {
    return this.cartData.asObservable();
  }


  public getPropertyList(): Observable<any> {
    return this.http.get('../../assets/mobileslist.json');

  }
}
