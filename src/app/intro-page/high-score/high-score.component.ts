import { Component, OnInit } from '@angular/core';
import { HighScoreService } from '../../high-score.service';


@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css'],
})
export class HighScoreComponent implements OnInit {

  constructor(private service: HighScoreService) { }


  ngOnInit() {

  }

  getScores() {
    this.service.getScores().subscribe(data =>{
      var myObject = JSON.parse(data);
  console.log(myObject);
      console.log("# data",data);
    });
  }

}
