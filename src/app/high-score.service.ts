import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HighScoreService {
  constructor(private httpClient: HttpClient) {
    // super(httpClient);
  }


  getScores() {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    // const headers = new HttpHeaders({ "Content-Type": "text/plain" });

    return this.httpClient.get<any>('https://tetris.chrum.it/scores', { headers });
  }

  postScores(scores: { name: string, score: string }) {
    return this.httpClient.post<any>('https://tetris.chrum.it/scores', null, {
      params: {
        "name": scores.name,
        "score": scores.score
      }
    });
  }
}
