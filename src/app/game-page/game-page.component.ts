import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public score = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onLineCleared() {
    let someValue: number;
    this.score++;
    someValue = this.score;
    return someValue.toString();
  }
}
