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

  constructor(){}

  onSubmit(form: NgForm) : void {
    console.log(form);
    throw new Error("Somthing went wrong!");
  }
}
