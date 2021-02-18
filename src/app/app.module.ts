import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
