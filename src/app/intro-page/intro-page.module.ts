import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { IntroPageComponent } from './intro-page.component';
import { IntroPageRoutingModule } from './intro-page.routing.module';
import { TetrisCoreModule } from 'ngx-tetris';
// import { HighScoreService } from '../high-score.service';
import { HighScoreComponent } from './high-score/high-score.component';
// import { HighScoreModule } from './high-score/high-score.module';

@NgModule({
  declarations: [IntroPageComponent,HighScoreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IntroPageRoutingModule,
    TetrisCoreModule,
  ],
//   providers: [HighScoreService],

})
export class IntroPageModule {}
