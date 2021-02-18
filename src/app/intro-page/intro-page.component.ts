import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {
  public nameValue: string = '..';
  public emailValue: string = '';
  public validNameMessage: string;
  public validEmailMessage: string;
  public nameIsInvalid: Boolean = true;
  public emailIsInvalid: Boolean = true;
  
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()

  //change = new EventEmitter();
  // public add(input: boolean) {
  //   input = !input;
  // }

  onNameEnter(value: string) {
    let mabyNameTemp: string = value;
    if (mabyNameTemp.length > 3) {
      this.nameIsInvalid = false;
      this.validNameMessage = "";
      this.nameValue = value + "!";
    } else if (mabyNameTemp.length <= 3 ) {
    this.validNameMessage = "Dłuższe imiona mają ludzie z gazet: Olek O., Anna P.";
    } else {"Z Twoim imeniem jest coś nie tak";
          }
  }

  onEmailEnter(value: string) {
    let mabyEmailTemp: string = value;
    //prosty walidator czy mail czy byle co, jak będe miała czas to zerknę na regex'y albo jaies gotowe walidatory Angulara
    if (mabyEmailTemp.includes('@') && mabyEmailTemp.includes('.') && (mabyEmailTemp.length > 6)) {
      this.emailIsInvalid = false;
      this.validEmailMessage = "";
      this.emailValue = value;
    } else {
      "Coś jest nie nie tak z tym mailem."}
  }

  checkIsValidForms() {
    this.validNameMessage = "";
    if (this.emailIsInvalid) this.validEmailMessage = "Ten email nie wygląda na prawidłowy."
    if (this.nameIsInvalid) this.validNameMessage = "Coś nie tak z Twoim imieniem."
    }


  constructor() { }

  ngOnInit(): void {

  }

  sendData(){
    //   this.change.emit(input);
    let validationFine: Boolean = !(this.nameIsInvalid || this.emailIsInvalid)
    let data = { valid: validationFine, name: this.nameValue, email: this.emailValue }
    this.parentFunction.emit(data)
  }

}
