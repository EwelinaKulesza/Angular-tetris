import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameState } from 'ngx-tetris';
import { HighScoreService } from '../high-score.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']

})
export class GamePageComponent implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()
  @Input() hero: any;
  public score = 0;
  public loggedName: string = "";
  public loggedEmail: string = "";
  //public startTime: number = 0;
  public gameStateLabel: string = "READY";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: HighScoreService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(urlParams => {
      this.loggedName = urlParams.name;
      this.loggedEmail = urlParams.email;

    });
  }

  resetScore() {
    this.score = 0;
  }

  onLineCleared() {
    let someValue: number;
    this.score++;
    someValue = this.score;
    return someValue.toString();
  }

  gameIsStartedState(inputStatus: boolean) {
    if (inputStatus === false) {
      this.gameStateLabel = "PAUSED";
    } else if (inputStatus === true) {
      this.gameStateLabel = "STARTED"
    } else this.gameStateLabel = "READY"
  }

  exitGame() {
    this.router.navigate(['/intro']);
  }

  postScores() {
    this.service.postScores(this.loggedName, this.score).subscribe();
  }

}

