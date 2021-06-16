import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HighScoreService {
  constructor(private httpClient: HttpClient) {
  }

  getScores() {
    const headers = new HttpHeaders({ 'accept': "application/json" });
    return this.httpClient.get<any>('http://tetris.chrum.it/scores', { headers });
  }

  postScores(name: string, score: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }),
    };

    const body = {
      "name": name,
      "score": score
    }

    const URL = `http://tetris.chrum.it/scores`;
    return this.httpClient.post<any>(URL, body, httpOptions);
  }


}
