import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userFormGroup : FormGroup;
  constructor(private fb : FormBuilder) {
    // this.userFormGroup = new FormGroup({
    //   fullName:new FormControl('',[Validators.required, Validators.minLength(5)]),
    //   email:new FormControl('',[Validators.required, Validators.email]),
    //   mobileNo:new FormControl('', [Validators.required]),
    //   password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    //   address:new FormGroup({
    //     city:new FormControl('', [Validators.required]),
    //     street:new FormControl('', [Validators.required]),
    //     postalCode:new FormControl('', [Validators.required])
    //   })
    // })

    this.userFormGroup = this.fb.group({
      fullName:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      mobileNo:fb.array([fb.control('')]),
      password:['',[Validators.required, Validators.minLength(6)]],
      address:this.fb.group({
        city:['',[Validators.required]],
        street:['',[Validators.required]],
        postalCode:['',[Validators.required]],
      })
    })
  }

  get fullName(){
    return this.userFormGroup.get('fullName');
  }
  get mobileNo(){
    return this.userFormGroup.get('mobileNo') as FormArray;
  }

  addMobileNo(){
    this.mobileNo.push(this.fb.control(''))
  }

  ngOnInit(): void {
  }

}
