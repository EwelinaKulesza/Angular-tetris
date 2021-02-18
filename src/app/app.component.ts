import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tetris by K. Ewelina';
  chldFormValid: Boolean = false;
  usrName: string = ""
  usrEmail: string = ""
  userInfoDate={
    name: this.usrName,
    email: this.usrEmail
  }
  parentFunction(data) {
    //console.warn(data);
    this.usrName=data.name;
    this.chldFormValid=data.valid;
    this.usrEmail =data.email;
  }

  public CurrentTime: any;

  constructor() {
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()}, 1);
  }
}


