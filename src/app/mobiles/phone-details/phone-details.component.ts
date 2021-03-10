import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectmobileService } from 'src/app/selectmobile.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  redmiMobiles = [];
  result;
  resultDisplay;
  constructor(private activetedRouter: ActivatedRoute,
              private router: Router,
              private mobileService: SelectmobileService) { }

  ngOnInit(): void {
    const cID = this.activetedRouter.snapshot.paramMap.get('id');
    console.log(cID);


    this.redmiMobiles = this.mobileService.getredmiMobiles();
    console.log(this.redmiMobiles);

  
    const result = this.redmiMobiles.find((r) => {
      return r.brand === cID;
    });
    this.resultDisplay = result;
    console.log(this.resultDisplay);
  }
}


