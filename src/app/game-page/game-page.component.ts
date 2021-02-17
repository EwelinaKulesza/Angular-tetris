import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public score = 0;
  public startTime: number = 0;
  constructor() { }

  ngOnInit(): void {
    let startTime = 60*60*(new Date().getHours()) + 60*(new Date().getMinutes()) + new Date().getSeconds();
    this.startTime = startTime;
  }

  public onLineCleared() {
    let someValue: number;
    this.score++;
    someValue = this.score;
    return someValue.toString();
  }

  //coś tu nie działa jak trzeba, ten czas początkowy niprawidłowo liczony
  public countPlayTime(timeOfBegining: number) {
    var currentTime = 60*60*(new Date().getHours()) + 60*(new Date().getMinutes()) + new Date().getSeconds();
    let playTimeAllSec = currentTime - timeOfBegining;
    let playTimeHours = (playTimeAllSec - (playTimeAllSec%3600))/3600;
    let playTimeSec = playTimeAllSec%60;
    let playTimeMin = (playTimeAllSec - 3600*playTimeHours - playTimeSec)/60;
    return (`${playTimeHours} hour, ${playTimeMin} min, ${playTimeSec} sec`)
  }
  public tTtime = this.countPlayTime(this.startTime)

}


