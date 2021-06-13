import { NgModule, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GamePageModule } from './game-page/game-page.module';
import { IntroPageModule } from './intro-page/intro-page.module';
// import { HighScoreModule } from './intro-page/high-score/high-score.module';
import { HighScoreComponent } from './intro-page/high-score/high-score.component';
import { HighScoreService } from './high-score.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // IntroPageComponent,
    // GamePageComponent,
    // HighScoreComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IntroPageModule,
    GamePageModule,
    HttpClientModule
  ],
  providers: [HttpClient, HighScoreService],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
