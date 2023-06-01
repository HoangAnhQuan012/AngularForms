import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  password = 'admin';
  isSignInClicked: boolean = false;
  // form = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   rememberMe: new FormControl(false)
  // });

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForms();

    setTimeout(() => {
      this.form.patchValue({
        username: 'admin',
        password: '',
        rememberMe: true
      })
    }, 1000);
  }

  createForms() {
    this.form = this.formBuilder.group({
      usename: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  submitForm() {
    const passwordValue = this.form.get('password').value;
    console.log(passwordValue); // In giá trị mật khẩu đã nhập vào
    return passwordValue;
  }

  signInClicked() {
    this.isSignInClicked = true;
  }



}
