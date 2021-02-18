import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tetris by K. Ewelina';
  public CurrentTime: any;
  public firstPageOnTop: Boolean = true;
  
  //TODO - to ma zagwarantować powrót z widoku gry
  public onChange(event: boolean) {
    this.firstPageOnTop = event;
  }
  
  constructor() {
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()}, 1);
  }
}


