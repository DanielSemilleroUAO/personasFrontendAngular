import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'daniel';
  password = '';
  errorMessage = 'Invalid Credential';
  invalidLogin = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
  }

  handleBasicAuthLogin(){

  }

}
