import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInfo = {
    userName: 'quanha',
    password: '',
    rememberMe: true,
  };

  usernamePattern = /^[a-z]{6,32}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

  constructor(){}

  onSubmit(form: NgForm) : void {
    console.log(form);
    throw new Error("Somthing went wrong!");
  }
}
