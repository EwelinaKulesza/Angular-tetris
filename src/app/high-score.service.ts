import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HighScoreService {
  constructor(private httpClient: HttpClient) {
  }


  //   load(): Observable<Array<Scores>> {
  //     const httpOptions = {
  //         headers: new HttpHeaders({
  //             'accept': 'application/json'
  //         })
  //     };
  //     const URL = `http://tetris.chrum.it/scores`;
  //     return this._http.get<Array<Scores>>(URL, httpOptions);
  // }

  getScores() {
    const headers = new HttpHeaders({ 'accept': "application/json" });
    return this.httpClient.get<any>('http://tetris.chrum.it/scores', { headers });
  }

  postScores(scores: { name: string, score: string }) {
    return this.httpClient.post<any>('http://tetris.chrum.it/scores', null, {
      params: {
        "name": scores.name,
        "score": scores.score
      }
    });
  }
}
