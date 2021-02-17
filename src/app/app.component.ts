import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tetris by K. Ewelina';
  //public startTime = 0;
  // find strat time in seconds
  public startTime = 60*60*(new Date().getHours()) + 60*(new Date().getMinutes()) + new Date().getSeconds()
  public CurrentTime: any;
  constructor() {
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()}, 1);
  }
}

