import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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
    this.form = this.formBuilder.group({
      usename: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
    setTimeout(() => {
      this.form.patchValue({
        username: 'admin',
        password: 'admin',
        rememberMe: true
      })
    }, 1000);
  }

  // createForms() {
  //   this.formBuilder.group({
  //     usename: ['', Validators.required],
  //     password: ['', Validators.required],
  //     rememberMe: [false]
  //   });
  // }

  onSubmit() {
    console.log(this.form.value);
  }

}
