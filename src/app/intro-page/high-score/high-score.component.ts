import { Component, OnInit } from '@angular/core';
import { HighScoreService } from '../../high-score.service';


@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css'],
})
export class HighScoreComponent implements OnInit {

  scores: { name: string, score: number }[];

  constructor(private service: HighScoreService) { }

  ngOnInit() {

  }

  getScores() {
    this.service.getScores().subscribe(data => {

      this.scores = this.sort(data);
      // var myObject = JSON.parse(data);
      // console.log(myObject);
      console.log("# data", data);
    });
  }


  sort(data) {

    

    return data;
  }

}
