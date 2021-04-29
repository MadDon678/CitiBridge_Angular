import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserHistory } from '../model/userHistory';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : User;
  userHistory : UserHistory[];
  constructor() { }

  ngOnInit() {
   this.user = {
      userName : "Madhura",
      firstName: "Madhura",
      lastName: "Dongare",
      password: "abc"
    }

    this.userHistory = [
      {
        userName: "Madhura",
        sector:"FMCG",
        stockName:"P&G",
        currentPrice: 100,
        quantity: 250
      },
      {
      userName: "Pratiksha",
      sector:"FMCGAC",
      stockName:"T&C",
      currentPrice: 105,
      quantity: 550}
    ]
  }

}
