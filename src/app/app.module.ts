import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { C1Component } from './testModule/c1/c1.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyComponent3Component } from './my-component3/my-component3.component';
import { MyPipePipe } from './my-pipe.pipe';
import { MyPipe2Pipe } from './my-pipe2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    C1Component,
    MyComponentComponent,
    MyComponent2Component,
    MyComponent3Component,
    MyPipePipe,
    MyPipe2Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
