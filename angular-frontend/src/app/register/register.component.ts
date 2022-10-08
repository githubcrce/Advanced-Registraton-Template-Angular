import { Component, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aadhaar:string = '';
  validated: any;
  nextRegistrationPageDisplay: any;
  user: any;
  buttonClicked: any;
  firstName: any;
  isValidFirstName: any;
  middleName: any;
  lastName: any;
  isValidLastName: any;
  dateOfBirth: any;
  bloodgroup: any;
  bloodgroups: any;
  gender: any;
  email: any;
  plusNineOne: any;
  phoneNo: any;
  password: any;
  hidePassword: any;
  isValidPassword: any;
  confirmPassword: any;
  hideConfirmPassword: any;
  isValidConfPassword: any;
  constructor() { }

  ngOnInit(): void {
  }
  onValChange(arg: any) {
  }
  onValueChanged() {
  }
  validateAadhaar() {
    this.validated = true;
    return true;
  }
  continueClick() {
    this.nextRegistrationPageDisplay = true;
  }
  cancelRegistration() {
  }
  goBack(cardNumber: number) {
    if (cardNumber == 1) {
      this.nextRegistrationPageDisplay = false;
    }
    if (cardNumber == 2) {
    }
  }
  changeIndex(tab: MatTabGroup,num: number) {
  }
  onPasswordValidation() {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (String(this.password).match(decimal)) {
      this.isValidPassword = true;
    } else {
      this.isValidPassword = false;
    }
    if (String(this.confirmPassword).match(decimal)) {
      this.isValidConfPassword = true;
    } else {
      this.isValidConfPassword = false;
    }
  }
  register() {
  }
  validateEmail(email: string) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    }
    return false;
  }
  validatePhone(phone: string) {
    var validRegex = /^\d{10}$/;
    if (phone.match(validRegex)) {
      return true;
    }
    return false;
  }
  

}
