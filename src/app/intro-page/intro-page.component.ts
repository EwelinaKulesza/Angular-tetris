import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {
  public nameValue: string = '...';
  private emailValue: string = '';
  public formNameIsShows: Boolean = true;
  public formEmailIsShows: Boolean = true;

  onNameEnter(value: string) {
    this.nameValue = value + "!";
    this.formNameIsShows = false;
  }

  onEmailEnter(value: string) {
    let mabyEmailTemp: string;
    if (mabyEmailTemp.includes("@")) {
      this.emailValue = value;
      this.formEmailIsShows = false;
    } 
    

  }


  constructor() { }

  ngOnInit(): void {
  }

}
