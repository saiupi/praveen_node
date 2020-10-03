import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  results: any;
  admin: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private myRoute: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     
      password: ['', Validators.required],
      mobileNumber: ['', [Validators.required,]],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    debugger;
    this.submitted = true;
    let adminProfile = {
      
      password: this.registerForm.controls['password'].value,
      mobileNumber: this.registerForm.controls['mobileNumber'].value,

    }
    this.admin=adminProfile.mobileNumber;
    console.log("admin details",this.admin)

    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return

    // }
     if(this.admin=="admin"){
      this.myRoute.navigate(["/admin"]);
    }
    else if(this.admin=="user"){
      this.myRoute.navigate(["/user"]);
    }
    else {
    alert("not found");

    }
    // this.http.post("http://192.168.2.44:3000/api/services/login",adminProfile).subscribe((res) => {
    //   this.results = res;
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

    //   this.myRoute.navigate(["/dashboard"]);

    //   console.log("44", this.results)
    // })
  }
  goToRegister(){
    this.myRoute.navigate(["/registor"]);

  }

}
