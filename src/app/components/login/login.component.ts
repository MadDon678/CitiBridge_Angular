import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../model/user' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "" ;
  password: string = "" ;
  hasError: boolean = false ;
  loginService: any;
  messageService: any;
  myRoute: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    localStorage.setItem('SessionUser',this.username) 
  }

  /*Login Functionality*/
  login() 
  {
    var self = this;
    if(this.username == null || this.password == null)
    {
      this.hasError = true ;
      return ;
    }
    else
    {
      this.hasError = false ;
      
      // this.myRoute.navigate(['/dashboard'])
    }
    
    sessionStorage.setItem("isLoggedIn", "false");


    //let temp: User = {username : this.username, password : btoa(this.password.split('').reverse().join('')) } ;
    // this.loginService.checkLogin(temp).subscribe((result : boolean) =>
    //   {
    //     this.loginService.isValidUser = result ;
    //     sessionStorage.setItem("isLoggedIn", String(result)) ;

    //     if(!result)
    //     {
    //       this.messageService.add({severity : 'error', summary : 'Error',detail : 'Incorrect Password '}) ;

    //     }
    //     else
    //     {
          
    //       this.myRoute.navigate(['/dashboard'])
    //     }
    //   }, (err: any) =>{
    //     this.messageService.add({severity: 'error', summary : 'Error',detail : 'Unable to fetch data, server down '  })
    //   }
    
    // ) ;
    }
}
