import { NgModule, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GamePageModule } from './game-page/game-page.module';
import { IntroPageModule } from './intro-page/intro-page.module';

@NgModule({
  declarations: [
    AppComponent,
    // IntroPageComponent,
    // GamePageComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // TetrisCoreModule,
    // ReactiveFormsModule,
    IntroPageModule,
    GamePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
