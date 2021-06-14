import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () =>
      import('./intro-page/intro-page.module').then(
        (mod) => mod.IntroPageModule
      ),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./game-page/game-page.module').then(
        (mod) => mod.GamePageModule
      ),
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
