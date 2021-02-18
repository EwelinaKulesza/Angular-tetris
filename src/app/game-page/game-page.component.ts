import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GameState } from 'ngx-tetris';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()

  public score = 0;
  public loggedName: string = ""
  public loggedEmail: string = ""
  //public startTime: number = 0;
  public gameStateInicator: boolean;
  constructor() { }

  ngOnInit(): void {
    // //TODO: tu też jest jakiś problem z tym zainicjowaniem czasu początkowego
    // let startTime = 3600*(new Date().getHours()) + 60*(new Date().getMinutes()) + new Date().getSeconds();
    // this.startTime = startTime;
  }

  public onLineCleared() {
    let someValue: number;
    this.score++;
    someValue = this.score;
    return someValue.toString();
  }
  
  public prettyBigGameIndicator(inputStatus: boolean) {
    if (inputStatus === false) {
      return "PAUSED";
    }else if (inputStatus === true){
      return "STARTED"
    } else return "READY"
  }

  sendData(){
    //   this.change.emit(input);
    let data = { valid: false, name: "", email: "" }
    this.parentFunction.emit(data)
  }


  // //coś tu nie działa jak trzeba, ten czas początkowy niprawidłowo liczony
  // public countPlayTime(timeOfBegining: number) {
  //   var currentTime = 60*60*(new Date().getHours()) + 60*(new Date().getMinutes()) + new Date().getSeconds();
  //   let playTimeAllSec = currentTime - timeOfBegining;
  //   let playTimeHours = (playTimeAllSec - (playTimeAllSec%3600))/3600;
  //   let playTimeSec = playTimeAllSec%60;
  //   let playTimeMin = (playTimeAllSec - 3600*playTimeHours - playTimeSec)/60;
  //   return (`${playTimeHours} hour, ${playTimeMin} min, ${playTimeSec} sec`)
  // }
  // public tTtime = this.countPlayTime(this.startTime)

}


