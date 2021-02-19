import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tetris by K. Ewelina';
  chldFormValid: Boolean = false;
  public usrName: string = "";
  public usrEmail: string = "";
  userInfoDate = {
    name: this.usrName,
    email: this.usrEmail
  }
  parentFunction(data: any) {
    console.warn(data);
    this.usrName = data.name;
    this.chldFormValid = data.valid;
    this.usrEmail = data.email;
  }

  public CurrentTime: any;

  constructor() {
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()}, 1);
  }

  ngOnInit(): void {
    this.usrName = this.userInfoDate.name;
    this.usrEmail = this.userInfoDate.email;
  }
}


