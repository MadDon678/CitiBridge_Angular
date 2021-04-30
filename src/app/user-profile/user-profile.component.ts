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
  imgUrl: string;
  constructor() { }

  first = 0;
  rows = 10;

  ngOnInit() {
   this.user = {
      userId: 1,
      userName : "Jane",
      firstName: "Jane",
      lastName: "Fraser",
      password: "abc"
    }
     this.imgUrl = "../assets/img/"+this.user.userName+".jpg";

    this.userHistory = [
      {
        userId: 1,
        userName: "Jane",
        sector:"FMCG",
        stockName:"P&G",
        currentPrice: 100,
        quantity: 250
      },
      {
        userId: 2,
        userName: "Jeff",
        sector:"FMCGAC",
        stockName:"T&C",
        currentPrice: 105,
        quantity: 550
     }
    ]
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.userHistory ? this.first === (this.userHistory.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.userHistory ? this.first === 0 : true;
  }

}
