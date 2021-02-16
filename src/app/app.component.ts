import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tetris by K. Ewelina';
  public score = 0;

  public onLineCleared() {
    let someValue: number;
    this.score++;
    someValue = this.score;
    return someValue.toString();
  }
}
