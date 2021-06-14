import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { GamePageRoutingModule } from './game-page.routing.module';
import { GamePageComponent } from './game-page.component';
import { TetrisCoreModule } from 'ngx-tetris';

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GamePageRoutingModule,
    TetrisCoreModule,
  ],
})
export class GamePageModule {}
